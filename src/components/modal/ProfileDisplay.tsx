import { Component, createSignal, createMemo, Show, Switch, Match, createEffect } from 'solid-js';

import ArrowPath from 'heroicons/24/outline/arrow-path.svg';
import Bolt from 'heroicons/24/outline/bolt.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';
import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import CheckCircle from 'heroicons/24/solid/check-circle.svg';
import ExclamationCircle from 'heroicons/24/solid/exclamation-circle.svg';
import { type UnsignedEvent } from 'nostr-tools/pure';

import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import TextNoteContentDisplay from '@/components/event/textNote/TextNoteContentDisplay';
import BasicModal from '@/components/modal/BasicModal';
import EventDebugModal from '@/components/modal/EventDebugModal';
import UserList from '@/components/modal/UserList';
import ZapRequestModal from '@/components/modal/ZapRequestModal';
import Timeline from '@/components/timeline/Timeline';
import SafeLink from '@/components/utils/SafeLink';
import useContextMenu from '@/components/utils/useContextMenu';
import { createFollowingColumn, createPostsColumn } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useRequestCommand } from '@/hooks/useCommandBus';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import { emptyFollowings } from '@/nostr/builder/createFollowings';
import { genericEvent } from '@/nostr/event';
import useFollowingsMutation from '@/nostr/mutation/useFollowingsMutation';
import { PublishEventResult } from '@/nostr/mutation/usePublishEventMutation';
import parseNip05Address from '@/nostr/parseNip05Address';
import parseTextNote, { toResolved } from '@/nostr/parseTextNote';
import useFollowers from '@/nostr/useFollowers';
import useFollowings, { fetchLatestFollowings } from '@/nostr/useFollowings';
import useProfile from '@/nostr/useProfile';
import usePubkey from '@/nostr/usePubkey';
import useSubscription from '@/nostr/useSubscription';
import useVerification from '@/nostr/useVerification';
import ensureNonNull from '@/utils/ensureNonNull';
import npubEncodeFallback from '@/utils/npubEncodeFallback';

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
  const i18n = useTranslation();
  const { config, addMutedPubkey, removeMutedPubkey, isPubkeyMuted, saveColumn } = useConfig();
  const request = useRequestCommand();
  const myPubkey = usePubkey();
  const { showProfileEdit } = useModalState();

  const npub = createMemo(() => npubEncodeFallback(props.pubkey));

  const [hoverFollowButton, setHoverFollowButton] = createSignal(false);
  const [showFollowers, setShowFollowers] = createSignal(false);
  const [modal, setModal] = createSignal<'Following' | 'EventDebugModal' | 'ZapRequest' | null>(
    null,
  );
  const closeModal = () => setModal(null);

  const {
    profile,
    event: profileEvent,
    query: profileQuery,
  } = useProfile(() => ({
    pubkey: props.pubkey,
  }));
  const { verification, query: verificationQuery } = useVerification(() =>
    ensureNonNull([profile()?.nip05] as const)(([nip05]) => ({ nip05 })),
  );
  const nip05Identifier = () => parseNip05Address(profile()?.nip05);
  const isVerified = () => verification()?.pubkey === props.pubkey;
  const isMuted = () => isPubkeyMuted(props.pubkey);

  const aboutParsed = createMemo(() => {
    const ev = profileEvent();
    const about = profile()?.about;
    if (ev == null || about == null) return undefined;

    const parsed = parseTextNote(about);
    const resolved = toResolved(parsed, genericEvent(ev));
    return resolved;
  });

  const { followingPubkeys: myFollowingPubkeys, query: myContactsQuery } = useFollowings(() =>
    ensureNonNull([myPubkey()] as const)(([pubkeyNonNull]) => ({
      pubkey: pubkeyNonNull,
    })),
  );
  const following = () => myFollowingPubkeys().includes(props.pubkey);

  const { followingPubkeys: userFollowingPubkeys, query: userFollowingQuery } = useFollowings(
    () => ({ pubkey: props.pubkey }),
  );

  const followed = () => {
    const p = myPubkey();
    return p != null && userFollowingPubkeys().includes(p);
  };

  const {
    mutation: followingsMutation,
    follow,
    unfollow,
  } = useFollowingsMutation({ pubkey: myPubkey() });

  const updateFollows = async (action: (ev: UnsignedEvent) => Promise<PublishEventResult>) => {
    try {
      const p = myPubkey();
      if (p == null) return;

      if (followingsMutation.isPending) return;

      const latest = await fetchLatestFollowings({ pubkey: p });

      if (
        (latest.data() == null || latest.followingPubkeys().length === 0) &&
        !window.confirm(i18n.t('profile.confirmUpdateEvenIfEmpty'))
      )
        return;

      if ((latest?.data()?.created_at ?? 0) < (myContactsQuery.data?.created_at ?? 0)) {
        window.alert(i18n.t('profile.failedToFetchLatestFollowList'));
        return;
      }

      const baseEvent = latest.data() ?? emptyFollowings(p);
      await action(baseEvent);
    } catch (err) {
      console.error('failed to update contact list', err);
      window.alert(i18n.t('profile.failedToUpdateFollowList'));
    }
  };

  const doFollow = () => {
    updateFollows((latestEvent) => follow(latestEvent, props.pubkey)).catch((err) => {
      console.log('failed to follow', err);
    });
  };

  const doUnfollow = () => {
    if (!window.confirm(i18n.t('profile.confirmUnfollow'))) return;

    updateFollows((latestEvent) => unfollow(latestEvent, props.pubkey)).catch((err) => {
      console.log('failed to unfollow', err);
    });
  };

  const otherActionsPopup = useContextMenu(() => ({
    menu: [
      /*
        {
          content: () => 'ユーザ宛に投稿',
          onSelect: () => {
            navigator.clipboard.writeText(npub()).catch((err) => window.alert(err));
          },
        },
       */
      {
        content: i18n.t('profile.copyPubkey'),
        onSelect: () => {
          navigator.clipboard.writeText(npub()).catch((err) => window.alert(err));
        },
      },
      {
        content: i18n.t('profile.showJSON'),
        onSelect: () => {
          setModal('EventDebugModal');
        },
      },
      {
        content: i18n.t('profile.addColumn'),
        items: [
          {
            content: i18n.t('profile.addUserColumn'),
            onSelect: () => {
              const columnName = profile()?.name ?? npub();
              saveColumn(createPostsColumn({ name: columnName, pubkey: props.pubkey }));
              request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
              props.onClose?.();
            },
          },
          {
            content: i18n.t('profile.addUserHomeColumn'),
            onSelect: () => {
              const columnName = `${i18n.t('column.home')} / ${profile()?.name ?? npub()}`;
              saveColumn(createFollowingColumn({ name: columnName, pubkey: props.pubkey }));
              request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
              props.onClose?.();
            },
          },
        ],
      },
      {
        content: !isMuted() ? i18n.t('profile.mute') : i18n.t('profile.unmute'),
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
        content: !following() ? i18n.t('profile.followMyself') : i18n.t('profile.unfollowMyself'),
        onSelect: () => {
          if (!following()) {
            doFollow();
          } else {
            doUnfollow();
          }
        },
      },
    ],
  }));

  const loadMore = useLoadMore(() => ({ duration: null }));

  const { events, eose } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6],
        authors: [props.pubkey],
        limit: 10,
        since: loadMore.since(),
        until: loadMore.until(),
      },
    ],
    eoseLimit: 10,
    continuous: false,
  }));

  createEffect(() => loadMore.setEvents(events()));

  return (
    <BasicModal onClose={() => props.onClose?.()}>
      <Show
        when={profileQuery.isFetched && profile()?.banner}
        fallback={<div class="h-12 shrink-0" />}
        keyed
      >
        {(bannerUrl) => (
          <div class="h-40 w-full shrink-0 sm:h-52">
            <img src={bannerUrl} alt="header" class="size-full object-cover" />
          </div>
        )}
      </Show>
      <div class="mt-[-54px] flex items-end gap-4 px-4 pt-4">
        <div class="flex-1 shrink-0">
          <div class="size-28 overflow-hidden rounded-lg shadow-md">
            <Show when={profileQuery.isFetched && profile()?.picture} keyed>
              {(pictureUrl) => (
                <img src={pictureUrl} alt="user icon" class="size-full object-cover" />
              )}
            </Show>
          </div>
        </div>
        <Show when={myPubkey() != null}>
          <div class="flex shrink-0 flex-col items-center gap-1">
            <div class="flex flex-row justify-start gap-1">
              <Switch>
                <Match when={props.pubkey === myPubkey()}>
                  <button
                    class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-primary-fg sm:w-20"
                    onClick={() => showProfileEdit()}
                  >
                    {i18n.t('profile.editProfile')}
                  </button>
                </Match>
                <Match when={followingsMutation.isPending}>
                  <span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">
                    {i18n.t('general.updating')}
                  </span>
                </Match>
                <Match when={myContactsQuery.isPending || myContactsQuery.isFetching}>
                  <span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">
                    {i18n.t('general.loading')}
                  </span>
                </Match>
                <Match when={following()}>
                  <button
                    class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-primary-fg hover:bg-primary-hover sm:w-36"
                    onMouseEnter={() => setHoverFollowButton(true)}
                    onMouseLeave={() => setHoverFollowButton(false)}
                    onClick={() => doUnfollow()}
                    disabled={followingsMutation.isPending}
                  >
                    <Show when={!hoverFollowButton()} fallback={i18n.t('profile.unfollow')}>
                      {i18n.t('profile.followingCurrently')}
                    </Show>
                  </button>
                </Match>
                <Match when={!following()}>
                  <button
                    class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-primary-hover hover:text-primary-hover"
                    onClick={() => doFollow()}
                    disabled={followingsMutation.isPending}
                  >
                    {i18n.t('profile.follow')}
                  </button>
                </Match>
              </Switch>
              <button
                class="w-10 rounded-full border border-primary p-2 text-primary hover:border-primary-hover hover:text-primary-hover"
                onClick={() => setModal('ZapRequest')}
              >
                <Bolt />
              </button>
              <button
                ref={otherActionsPopup.targetRef}
                type="button"
                class="w-10 rounded-full border border-primary p-2 text-primary hover:border-primary-hover hover:text-primary-hover"
                onClick={() => otherActionsPopup.open()}
              >
                <EllipsisHorizontal />
              </button>
              {otherActionsPopup.popup()}
            </div>
            <Switch>
              <Match when={userFollowingQuery.isPending}>
                <div class="shrink-0 text-xs">{i18n.t('general.loading')}</div>
              </Match>
              <Match when={followed()}>
                <div class="shrink-0 text-xs">{i18n.t('profile.followsYou')}</div>
              </Match>
            </Switch>
          </div>
        </Show>
      </div>
      <div class="flex items-start px-4 pt-2">
        <div class="h-16 shrink overflow-hidden">
          <Show when={profileQuery.isPending}>{i18n.t('general.loading')}</Show>
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
                    <span class="inline-block size-4 text-danger">
                      <ExclamationCircle />
                    </span>
                  }
                >
                  <Match when={verificationQuery.isPending}>
                    <span class="inline-block size-3">
                      <ArrowPath />
                    </span>
                  </Match>
                  <Match when={isVerified()}>
                    <span class="inline-block size-4 text-link">
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
      <Show when={aboutParsed()} keyed>
        {(parsed) => (
          <div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">
            <TextNoteContentDisplay parsed={parsed} embedding={false} initialHidden />
          </div>
        )}
      </Show>
      <div class="flex border-t border-border px-4 py-2">
        <button class="flex flex-1 flex-col items-start" onClick={() => setModal('Following')}>
          <div class="text-sm">{i18n.t('profile.following')}</div>
          <div class="text-xl">
            <Show
              when={userFollowingQuery.isFetched}
              fallback={<span class="text-sm">{i18n.t('general.loading')}</span>}
            >
              {userFollowingPubkeys().length}
            </Show>
          </div>
        </button>
        <Show when={!config().hideCount}>
          <div class="flex flex-1 flex-col items-start">
            <div class="text-sm">{i18n.t('profile.followers')}</div>
            <div class="text-xl">
              <Show
                when={showFollowers()}
                fallback={
                  <button
                    class="text-sm hover:text-fg-secondary"
                    onClick={() => setShowFollowers(true)}
                  >
                    {i18n.t('profile.loadFollowers')}
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
        <ul class="border-t border-border px-5 py-2 text-xs">
          <Show when={profile()?.website} keyed>
            {(website) => (
              <li class="flex items-center gap-1">
                <span class="inline-block size-4" area-label="website" title="website">
                  <GlobeAlt />
                </span>
                <SafeLink class="text-link underline" href={website} />
              </li>
            )}
          </Show>
        </ul>
      </Show>
      <Switch>
        <Match when={modal() === 'Following'}>
          <UserList data={userFollowingPubkeys()} pubkeyExtractor={(e) => e} onClose={closeModal} />
        </Match>
        <Match when={modal() === 'EventDebugModal' && profileQuery.data} keyed>
          {(event) => (
            <EventDebugModal
              event={event}
              extra={JSON.stringify(profile(), null, 2)}
              onClose={closeModal}
            />
          )}
        </Match>
        <Match when={modal() === 'ZapRequest'}>
          <ZapRequestModal zapTo={{ pubkey: props.pubkey }} onClose={closeModal} />
        </Match>
      </Switch>
      <ul class="border-t border-border p-1">
        <LoadMore loadMore={loadMore} eose={eose()}>
          <Timeline events={events()} />
        </LoadMore>
      </ul>
    </BasicModal>
  );
};

export default ProfileDisplay;
