import { Component, createSignal, createMemo, Show, Switch, Match, createEffect } from 'solid-js';

import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';
import CheckCircle from 'heroicons/24/solid/check-circle.svg';
import ExclamationCircle from 'heroicons/24/solid/exclamation-circle.svg';
import ArrowPath from 'heroicons/24/outline/arrow-path.svg';

import Modal from '@/components/Modal';
import Timeline from '@/components/Timeline';
import Copy from '@/components/utils/Copy';
import SafeLink from '@/components/utils/SafeLink';

import usePubkey from '@/nostr/usePubkey';
import useProfile from '@/nostr/useProfile';
import useVerification from '@/nostr/useVerification';
import useFollowings from '@/nostr/useFollowings';
import useFollowers from '@/nostr/useFollowers';
import useConfig from '@/nostr/useConfig';
import useSubscription from '@/nostr/useSubscription';

import npubEncodeFallback from '@/utils/npubEncodeFallback';
import ensureNonNull from '@/utils/ensureNonNull';
import epoch from '@/utils/epoch';

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
  const { config } = useConfig();
  const pubkey = usePubkey();

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

  const { followingPubkeys: myFollowingPubkeys } = useFollowings(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      pubkey: pubkeyNonNull,
    })),
  );
  const following = () => myFollowingPubkeys().includes(props.pubkey);

  const { followingPubkeys: userFollowingPubkeys, query: userFollowingQuery } = useFollowings(
    () => ({
      pubkey: props.pubkey,
    }),
  );
  const followed = () => {
    const p = pubkey();
    return p != null && userFollowingPubkeys().includes(p);
  };

  const npub = createMemo(() => npubEncodeFallback(props.pubkey));

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
    <Modal onClose={() => props.onClose?.()}>
      <div class="h-screen w-[640px] max-w-full">
        <button
          class="w-full pt-1 text-start text-stone-800"
          aria-label="Close"
          onClick={() => props.onClose?.()}
        >
          <span class="inline-block h-8 w-8">
            <XMark />
          </span>
        </button>
        <div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-16 text-stone-700 shadow-lg">
          <Show when={profileQuery.isFetched} fallback={<>loading</>}>
            <Show when={profile()?.banner} fallback={<div class="h-12 shrink-0" />} keyed>
              {(bannerUrl) => (
                <div class="h-40 w-full shrink-0 sm:h-52">
                  <img src={bannerUrl} alt="header" class="h-full w-full object-cover" />
                </div>
              )}
            </Show>
            <div class="mt-[-54px] flex items-end gap-4 px-4 pt-4">
              <div class="h-28 w-28 shrink-0 rounded-lg shadow-md">
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
              <div class="flex items-start overflow-hidden">
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
                    <Copy
                      class="h-4 w-4 shrink-0 text-stone-500 hover:text-stone-700"
                      text={npub()}
                    />
                  </div>
                </div>
                <div class="flex shrink-0 flex-col items-center justify-center gap-1">
                  {/*
                  <Switch
                    fallback={
                      <button
                        class="w-24 rounded-full border border-primary px-4 py-2 text-primary
                                     hover:border-rose-400 hover:text-rose-400"
                      >
                        フォロー
                      </button>
                    }
                  >
                    <Match when={props.pubkey === pubkey()}>
                      <button
                        class="w-20 rounded-full border border-primary px-4 py-2 text-primary
                               hover:border-rose-400 hover:text-rose-400"
                      >
                        編集
                      </button>
                    </Match>
                    <Match when={following()}>
                      <button
                        class="w-32 rounded-full border border-primary bg-primary px-4 py-2
                               text-center font-bold text-white hover:bg-rose-500"
                        onMouseEnter={() => setHoverFollowButton(true)}
                        onMouseLeave={() => setHoverFollowButton(false)}
                      >
                        <Show when={!hoverFollowButton()} fallback="フォロー解除">
                          フォロー中
                        </Show>
                      </button>
                    </Match>
                  </Switch>
                  */}
                  <Show when={followed()}>
                    <div class="shrink-0 text-xs">フォローされています</div>
                  </Show>
                </div>
              </div>
            </div>
            <Show when={(profile()?.about ?? '').length > 0}>
              <div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-5 py-3 text-sm">
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
        </div>
      </div>
    </Modal>
  );
};

export default ProfileDisplay;
