import { Component, createSignal, createMemo, Show, Switch, Match, createEffect } from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import ArrowPath from 'heroicons/24/outline/arrow-path.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';
import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import CheckCircle from 'heroicons/24/solid/check-circle.svg';
import ExclamationCircle from 'heroicons/24/solid/exclamation-circle.svg';
import uniq from 'lodash/uniq';

import ContextMenu, { MenuItem } from '@/components/ContextMenu';
import BasicModal from '@/components/modal/BasicModal';
import Timeline from '@/components/timeline/Timeline';
import SafeLink from '@/components/utils/SafeLink';
import useConfig from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import useCommands from '@/nostr/useCommands';
import useFollowers from '@/nostr/useFollowers';
import useFollowings from '@/nostr/useFollowings';
import useProfile from '@/nostr/useProfile';
import usePubkey from '@/nostr/usePubkey';
import useSubscription from '@/nostr/useSubscription';
import useVerification from '@/nostr/useVerification';
import ensureNonNull from '@/utils/ensureNonNull';
import epoch from '@/utils/epoch';
import npubEncodeFallback from '@/utils/npubEncodeFallback';
import sleep from '@/utils/sleep';
import timeout from '@/utils/timeout';

export type ProfileDisplayProps = {
  pubkey: string;
  onClose?: () => void;
};

const FollowersCount: Component<{ pubkey: string }> = (props) => {
  const { count } = useFollowers(() => ({
    pubkey: props.pubkey,
  }));

  return <>{count()}</>;
};

const ProfileDisplay: Component<ProfileDisplayProps> = (props) => {
  const { config, addMutedPubkey, removeMutedPubkey, isPubkeyMuted } = useConfig();
  const commands = useCommands();
  const myPubkey = usePubkey();
  const { showProfileEdit } = useModalState();

  const npub = createMemo(() => npubEncodeFallback(props.pubkey));

  const [updatingContacts, setUpdatingContacts] = createSignal(false);
  const [hoverFollowButton, setHoverFollowButton] = createSignal(false);
  const [showFollowers, setShowFollowers] = createSignal(false);

  const { profile, query: profileQuery } = useProfile(() => ({
    pubkey: props.pubkey,
  }));
  const { verification, query: verificationQuery } = useVerification(() =>
    ensureNonNull([profile()?.nip05] as const)(([nip05]) => ({ nip05 })),
  );
  const nip05Identifier = () => {
    const ident = profile()?.nip05;
    if (ident == null) return null;
    const [user, domain] = ident.split('@');
    if (domain == null) return null;
    if (user === '_') return { domain, ident: domain };
    return { user, domain, ident };
  };
  const isVerified = () => verification()?.pubkey === props.pubkey;
  const isMuted = () => isPubkeyMuted(props.pubkey);

  const {
    followingPubkeys: myFollowingPubkeys,
    invalidateFollowings: invalidateMyFollowings,
    query: myFollowingQuery,
  } = useFollowings(() =>
    ensureNonNull([myPubkey()] as const)(([pubkeyNonNull]) => ({
      pubkey: pubkeyNonNull,
    })),
  );
  const following = () => myFollowingPubkeys().includes(props.pubkey);
  const refetchMyFollowing = () => myFollowingQuery.refetch();

  const { followingPubkeys: userFollowingPubkeys, query: userFollowingQuery } = useFollowings(
    () => ({ pubkey: props.pubkey }),
  );

  const followed = () => {
    const p = myPubkey();
    return p != null && userFollowingPubkeys().includes(p);
  };

  const updateContactsMutation = createMutation({
    mutationKey: ['updateContacts'],
    mutationFn: (...params: Parameters<typeof commands.updateContacts>) =>
      commands
        .updateContacts(...params)
        .then((promises) => Promise.allSettled(promises.map(timeout(5000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        console.log('succeeded to update contacts');
      } else if (succeeded > 0) {
        console.log(
          `succeeded to update contacts for ${succeeded} relays but failed for ${failed} relays`,
        );
      } else {
        console.error('failed to update contacts');
      }
    },
    onError: (err) => {
      console.error('failed to update contacts: ', err);
    },
    onSettled: () => {
      invalidateMyFollowings()
        .then(() => myFollowingQuery.refetch())
        .catch((err) => console.error('failed to refetch contacts', err));
    },
  });

  const updateContacts = async (update: (current: string[]) => string[]) => {
    try {
      const p = myPubkey();
      if (p == null) return;
      setUpdatingContacts(true);

      await refetchMyFollowing();
      await sleep(3000);

      const current = myFollowingPubkeys();
      console.debug('current pubkeys', current);

      await updateContactsMutation.mutateAsync({
        relayUrls: config().relayUrls,
        pubkey: p,
        content: myFollowingQuery.data?.content ?? '',
        followingPubkeys: uniq(update(current)),
      });
    } finally {
      setUpdatingContacts(false);
    }
  };

  const follow = () => {
    updateContacts((current) => [...current, props.pubkey]).catch((err) => {
      console.log('failed to follow', err);
    });
  };

  const unfollow = () => {
    if (!window.confirm('本当にフォロー解除しますか？')) return;

    updateContacts((current) => current.filter((k) => k !== props.pubkey)).catch((err) => {
      console.log('failed to unfollow', err);
    });
  };

  const menu: MenuItem[] = [
    /*
    {
      content: () => 'ユーザ宛に投稿',
      onSelect: () => {
        navigator.clipboard.writeText(npub()).catch((err) => window.alert(err));
      },
    },
     */
    {
      content: () => 'IDをコピー',
      onSelect: () => {
        navigator.clipboard.writeText(npub()).catch((err) => window.alert(err));
      },
    },
    {
      content: () => (!isMuted() ? 'ミュート' : 'ミュート解除'),
      onSelect: () => {
        if (!isMuted()) {
          addMutedPubkey(props.pubkey);
        } else {
          removeMutedPubkey(props.pubkey);
        }
      },
    },
    {
      when: () => props.pubkey === myPubkey(),
      content: () => (!following() ? '自分をフォロー' : '自分をフォロー解除'),
      onSelect: () => {
        if (!following()) {
          follow();
        } else {
          unfollow();
        }
      },
    },
  ];

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6],
        authors: [props.pubkey],
        limit: 10,
        until: epoch(),
      },
    ],
    continuous: false,
  }));

  return (
    <BasicModal onClose={() => props.onClose?.()}>
      <Show when={profileQuery.isFetched} fallback={<>loading</>}>
        <Show when={profile()?.banner} fallback={<div class="h-12 shrink-0" />} keyed>
          {(bannerUrl) => (
            <div class="h-40 w-full shrink-0 sm:h-52">
              <img src={bannerUrl} alt="header" class="h-full w-full object-cover" />
            </div>
          )}
        </Show>
        <div class="mt-[-54px] flex items-end gap-4 px-4 pt-4">
          <div class="flex-1 shrink-0">
            <div class="h-28 w-28 rounded-lg shadow-md">
              <Show when={profile()?.picture} keyed>
                {(pictureUrl) => (
                  <img
                    src={pictureUrl}
                    alt="user icon"
                    class="h-full w-full rounded-lg object-cover"
                  />
                )}
              </Show>
            </div>
          </div>
          <div class="flex shrink-0 flex-col items-center gap-1">
            <div class="flex flex-row justify-start gap-1">
              <Switch>
                <Match when={props.pubkey === myPubkey()}>
                  <button
                    class="rounded-full border border-primary px-4 py-2
                    text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20"
                    onClick={() => showProfileEdit()}
                  >
                    編集
                  </button>
                </Match>
                <Match when={updateContactsMutation.isLoading || updatingContacts()}>
                  <span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">
                    更新中
                  </span>
                </Match>
                <Match when={myFollowingQuery.isLoading || myFollowingQuery.isFetching}>
                  <span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">
                    読み込み中
                  </span>
                </Match>
                <Match when={following()}>
                  <button
                    class="rounded-full border border-primary bg-primary px-4 py-2
                    text-center font-bold text-white hover:bg-rose-500 sm:w-36"
                    onMouseEnter={() => setHoverFollowButton(true)}
                    onMouseLeave={() => setHoverFollowButton(false)}
                    onClick={() => unfollow()}
                    disabled={updateContactsMutation.isLoading}
                  >
                    <Show when={!hoverFollowButton()} fallback="フォロー解除">
                      フォロー中
                    </Show>
                  </button>
                </Match>
                <Match when={!following()}>
                  <button
                    class="w-28 rounded-full border border-primary px-4 py-2 text-primary
                    hover:border-rose-400 hover:text-rose-400"
                    onClick={() => follow()}
                    disabled={updateContactsMutation.isLoading}
                  >
                    フォロー
                  </button>
                </Match>
              </Switch>
              <ContextMenu menu={menu}>
                <button
                  class="w-10 rounded-full border border-primary p-2 text-primary
                  hover:border-rose-400 hover:text-rose-400"
                >
                  <EllipsisHorizontal />
                </button>
              </ContextMenu>
            </div>
            <Switch>
              <Match when={userFollowingQuery.isLoading}>
                <div class="shrink-0 text-xs">読み込み中</div>
              </Match>
              <Match when={followed()}>
                <div class="shrink-0 text-xs">フォローされています</div>
              </Match>
            </Switch>
          </div>
        </div>
        <div class="flex items-start px-4 pt-2">
          <div class="h-16 shrink overflow-hidden">
            <Show when={(profile()?.display_name?.length ?? 0) > 0}>
              <div class="truncate text-xl font-bold">{profile()?.display_name}</div>
            </Show>
            <div class="flex items-center gap-2">
              <Show when={(profile()?.name?.length ?? 0) > 0}>
                <div class="truncate text-xs">@{profile()?.name}</div>
              </Show>
              <Show when={(profile()?.nip05?.length ?? 0) > 0}>
                <div class="flex items-center text-xs">
                  {nip05Identifier()?.ident}
                  <Switch
                    fallback={
                      <span class="inline-block h-4 w-4 text-rose-500">
                        <ExclamationCircle />
                      </span>
                    }
                  >
                    <Match when={verificationQuery.isLoading}>
                      <span class="inline-block h-3 w-3">
                        <ArrowPath />
                      </span>
                    </Match>
                    <Match when={isVerified()}>
                      <span class="inline-block h-4 w-4 text-blue-400">
                        <CheckCircle />
                      </span>
                    </Match>
                  </Switch>
                </div>
              </Show>
            </div>
            <div class="flex gap-1">
              <div class="truncate text-xs">{npub()}</div>
            </div>
          </div>
        </div>
        <Show when={(profile()?.about ?? '').length > 0}>
          <div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">
            {profile()?.about}
          </div>
        </Show>
        <div class="flex border-t px-4 py-2">
          <div class="flex flex-1 flex-col items-start">
            <div class="text-sm">フォロー</div>
            <div class="text-xl">
              <Show
                when={userFollowingQuery.isFetched}
                fallback={<span class="text-sm">読み込み中</span>}
              >
                {userFollowingPubkeys().length}
              </Show>
            </div>
          </div>
          <Show when={!config().hideCount}>
            <div class="flex flex-1 flex-col items-start">
              <div class="text-sm">フォロワー</div>
              <div class="text-xl">
                <Show
                  when={showFollowers()}
                  fallback={
                    <button
                      class="text-sm hover:text-stone-800 hover:underline"
                      onClick={() => setShowFollowers(true)}
                    >
                      読み込む
                    </button>
                  }
                  keyed
                >
                  <FollowersCount pubkey={props.pubkey} />
                </Show>
              </div>
            </div>
          </Show>
        </div>
        <Show when={(profile()?.website ?? '').length > 0}>
          <ul class="border-t px-5 py-2 text-xs">
            <Show when={profile()?.website} keyed>
              {(website) => (
                <li class="flex items-center gap-1">
                  <span class="inline-block h-4 w-4" area-label="website" title="website">
                    <GlobeAlt />
                  </span>
                  <SafeLink class="text-blue-500 underline" href={website} />
                </li>
              )}
            </Show>
          </ul>
        </Show>
      </Show>
      <ul class="border-t p-1">
        <Timeline events={events()} />
      </ul>
    </BasicModal>
  );
};

export default ProfileDisplay;
