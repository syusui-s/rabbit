import { Component, createMemo, Show } from 'solid-js';
import { npubEncode } from 'nostr-tools/nip19';

import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import Modal from '@/components/Modal';
import Copy from '@/components/utils/Copy';

import useProfile from '@/nostr/useProfile';
import useConfig from '@/nostr/useConfig';

export type ProfileDisplayProps = {
  pubkey: string;
};

const ProfileDisplay: Component<ProfileDisplayProps> = (props) => {
  const { config } = useConfig();
  const { profile, query } = useProfile(() => ({
    relayUrls: config().relayUrls,
    pubkey: props.pubkey,
  }));

  const npub = createMemo(() => npubEncode(props.pubkey));

  return (
    <Modal>
      <div class="max-h-full w-[640px] max-w-full overflow-scroll">
        <div class="flex justify-end">
          <button class="h-8 w-8 text-stone-700">
            <XMark />
          </button>
        </div>
        <div class="flex w-full flex-col overflow-hidden rounded-2xl border bg-white text-stone-700 shadow-lg">
          <Show when={query.isFetched} fallback={<>loading</>}>
            <div class="h-40 w-full sm:h-52">
              <Show when={profile()?.banner} keyed>
                {(bannerUrl) => (
                  <img src={bannerUrl} alt="header" class="h-full w-full object-cover" />
                )}
              </Show>
            </div>
            <div class="flex h-[64px] items-center gap-2 px-2">
              <div class="mt-[-64px] h-28 w-28 shrink-0 rounded-lg border-2 object-cover">
                <Show when={profile()?.picture} keyed>
                  {(pictureUrl) => <img src={pictureUrl} alt="user icon" class="h-full w-full" />}
                </Show>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <div class="truncate text-xl font-bold">{profile()?.display_name}</div>
                  <div class="shrink-0 text-sm">@{profile()?.name}</div>
                </div>
                <div class="flex gap-1">
                  <div class="truncate text-xs">{npub()}</div>
                  <Copy class="h-4 w-4 text-stone-500 hover:text-stone-700" text={npub()} />
                </div>
              </div>
            </div>
            <div class="max-h-32 overflow-scroll whitespace-pre-wrap px-4 pt-1 text-sm">
              {profile()?.about}
            </div>
            <ul class="px-4 py-2 text-xs">
              <Show when={profile()?.website}>
                <li class="flex items-center gap-1">
                  <span class="inline-block h-4 w-4" area-label="website" title="website">
                    <GlobeAlt />
                  </span>
                  <a href={profile()?.website} target="_blank" rel="noreferrer noopener">
                    {profile()?.website}
                  </a>
                </li>
              </Show>
            </ul>
          </Show>
          <div class="h-16 border" />
        </div>
      </div>
    </Modal>
  );
};

export default ProfileDisplay;
