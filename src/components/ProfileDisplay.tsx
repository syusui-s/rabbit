import { Component, createSignal, createMemo, Show, Switch, Match } from 'solid-js';

import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import Modal from '@/components/Modal';
import Copy from '@/components/utils/Copy';
import SafeLink from '@/components/utils/SafeLink';

import useProfile from '@/nostr/useProfile';
import npubEncodeFallback from '@/utils/npubEncodeFallback';
import useFollowings from '@/nostr/useBatchedEvents';
import ensureNonNull from '@/utils/ensureNonNull';
import usePubkey from '@/nostr/usePubkey';
import useSubscription from '@/nostr/useSubscription';
import useConfig from '@/nostr/useConfig';
import Timeline from './Timeline';

export type ProfileDisplayProps = {
  pubkey: string;
  onClose?: () => void;
};

const ProfileDisplay: Component<ProfileDisplayProps> = (props) => {
  const { config } = useConfig();
  const pubkey = usePubkey();

  const [hoverFollowButton, setHoverFollowButton] = createSignal(false);

  const { profile, query } = useProfile(() => ({
    pubkey: props.pubkey,
  }));

  const { followingPubkeys: myFollowingPubkeys } = useFollowings(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      pubkey: pubkeyNonNull,
    })),
  );
  const isFollowing = () => myFollowingPubkeys().includes(props.pubkey);

  const npub = createMemo(() => npubEncodeFallback(props.pubkey));

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6],
        authors: [props.pubkey],
        limit: 10,
        until: Date.now() / 1000,
      },
    ],
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
        <div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">
          <Show when={query.isFetched} fallback={<>loading</>}>
            <Show when={profile()?.banner} fallback={<div class="h-20 shrink-0" />} keyed>
              {(bannerUrl) => (
                <div class="h-40 w-full shrink-0 sm:h-52">
                  <img src={bannerUrl} alt="header" class="h-full w-full object-cover shadow" />
                </div>
              )}
            </Show>
            <div class="flex h-[64px] items-center gap-4 px-4">
              <div class="mt-[-32px] h-28 w-28 shrink-0 rounded-lg shadow-md sm:mt-[-64px]">
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
              <div class="mt-2 flex-1 overflow-hidden">
                <div class="flex flex-wrap items-center">
                  <div class="truncate text-lg font-bold sm:text-xl">{profile()?.display_name}</div>
                  <div class="truncate text-xs">@{profile()?.name}</div>
                </div>
                <div class="flex gap-1">
                  <div class="truncate text-xs">{npub()}</div>
                  <Copy
                    class="h-4 w-4 shrink-0 text-stone-500 hover:text-stone-700"
                    text={npub()}
                  />
                </div>
              </div>
              {/*
              <div>
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
                  <Match when={isFollowing()}>
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
              </div>
              */}
            </div>
            <Show when={(profile()?.about ?? '').length > 0}>
              <div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-5 py-4 text-sm">
                {profile()?.about}
              </div>
            </Show>
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
