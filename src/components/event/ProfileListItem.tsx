import { Component, Show } from 'solid-js';

import useProfile from '@/nostr/useProfile';
import npubEncodeFallback from '@/utils/npubEncodeFallback';
import { thumbnailUrl } from '@/utils/url';

export type ProfileListItemProps = {
  pubkey: string;
  onShowProfile?: () => void;
};

const ProfileListItem: Component<ProfileListItemProps> = (props) => {
  const { profile } = useProfile(() => ({
    pubkey: props.pubkey,
  }));

  return (
    <div class="flex w-full items-center gap-1">
      <button
        type="button"
        class="profile-icon size-6 shrink-0 overflow-hidden"
        onClick={(ev) => {
          ev.preventDefault();
          props.onShowProfile?.();
        }}
      >
        <Show when={profile()?.picture} keyed>
          {(url) => (
            <img src={thumbnailUrl(url)} alt="icon" class="size-full rounded object-cover" />
          )}
        </Show>
      </button>
      <div class="min-w-0 flex-auto">
        <div class="flex justify-between gap-1 text-xs">
          <button
            type="button"
            class="profile flex min-w-0 select-text truncate hover:text-link"
            onClick={(ev) => {
              ev.preventDefault();
              props?.onShowProfile?.();
            }}
          >
            <span class="profile flex min-w-0 truncate hover:text-link">
              <Show when={(profile()?.display_name?.length ?? 0) > 0}>
                <div class="profile-name truncate pr-1 font-bold hover:underline">
                  {profile()?.display_name}
                </div>
              </Show>
              <div class="profile-username truncate text-fg-secondary">
                <Show
                  when={profile()?.name}
                  fallback={`@${npubEncodeFallback(props.pubkey)}`}
                  keyed
                >
                  {(name) => `@${name}`}
                </Show>
                {/* TODO <Match when={profile()?.nip05 != null}>@{author()?.nip05}</Match> */}
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileListItem;
