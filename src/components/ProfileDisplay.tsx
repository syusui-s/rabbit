import { Component, createMemo, Show } from 'solid-js';

import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import Modal from '@/components/Modal';
import Copy from '@/components/utils/Copy';
import SafeLink from '@/components/utils/SafeLink';

import useProfile from '@/nostr/useProfile';
import npubEncodeFallback from '@/utils/npubEncodeFallback';

export type ProfileDisplayProps = {
  pubkey: string;
  onClose?: () => void;
};

const ProfileDisplay: Component<ProfileDisplayProps> = (props) => {
  const { profile, query } = useProfile(() => ({
    pubkey: props.pubkey,
  }));

  const npub = createMemo(() => npubEncodeFallback(props.pubkey));

  return (
    <Modal onClose={() => props.onClose?.()}>
      <div class="max-h-full w-[640px] max-w-full">
        <button class="h-8 w-8 text-stone-700" aria-label="Close" onClick={() => props.onClose?.()}>
          <XMark />
        </button>
        <div class="flex w-full flex-col overflow-hidden rounded-2xl border bg-white text-stone-700 shadow-lg">
          <Show when={query.isFetched} fallback={<>loading</>}>
            <Show when={profile()?.banner} fallback={<div class="h-20" />} keyed>
              {(bannerUrl) => (
                <div class="h-40 w-full sm:h-52">
                  <img src={bannerUrl} alt="header" class="h-full w-full object-cover" />
                </div>
              )}
            </Show>
            <div class="flex h-[64px] items-center gap-4 px-4">
              <div class="mt-[-64px] h-28 w-28 shrink-0 rounded-lg bg-stone-400 shadow-md">
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
              <div class="flex-1 overflow-hidden">
                <div class="flex items-center gap-2">
                  <div class="truncate text-xl font-bold">{profile()?.display_name}</div>
                  <div class="shrink-0 text-sm font-bold">@{profile()?.name}</div>
                </div>
                <div class="flex gap-1">
                  <div class="truncate text-xs">{npub()}</div>
                  <Copy
                    class="h-4 w-4 shrink-0 text-stone-500 hover:text-stone-700"
                    text={npub()}
                  />
                </div>
              </div>
            </div>
            <div class="max-h-32 overflow-auto whitespace-pre-wrap px-5 py-2 text-sm">
              {profile()?.about}
            </div>
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
        </div>
      </div>
    </Modal>
  );
};

export default ProfileDisplay;
