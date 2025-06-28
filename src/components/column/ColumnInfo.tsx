import { type Component, Show } from 'solid-js';

import EllipsisVertical from 'heroicons/24/outline/ellipsis-vertical.svg';

import UserDisplayName from '@/components/UserDisplayName';
import useContextMenu, { type MenuItem } from '@/components/utils/useContextMenu';
import useModalState from '@/hooks/useModalState';

export type ColumnInfoProps = {
  image?: string;
  title: string;
  description?: string;
  authorPubkey?: string;
  extraInfo?: string;
  otherActionMenuItems?: MenuItem[];
};

const ColumnInfo: Component<ColumnInfoProps> = (props) => {
  const { showProfile } = useModalState();

  const otherActionsPopup = useContextMenu(() => ({
    menu: props.otherActionMenuItems ?? [],
  }));

  return (
    <div class="flex items-start gap-2 break-all border-t border-border p-1">
      <div class="mt-1 size-14 shrink-0 overflow-hidden rounded">
        <Show when={props.image} keyed>
          {(url) => <img class="size-full object-cover" alt="icon" src={url} />}
        </Show>
      </div>
      <div class="flex flex-1 flex-col overflow-hidden">
        <h3 class="truncate text-lg font-bold">{props.title}</h3>
        <p class="max-h-[3.25rem] overflow-y-auto break-all text-sm">{props.description}</p>
        <Show when={props.authorPubkey} keyed>
          {(authorPubkey) => (
            <div class="text-xs">
              <button
                class="select-text truncate hover:text-link hover:underline"
                onClick={() => showProfile(authorPubkey)}
              >
                <UserDisplayName pubkey={authorPubkey} />
              </button>
            </div>
          )}
        </Show>
      </div>
      <Show when={props.otherActionMenuItems}>
        <>
          <button
            ref={otherActionsPopup.targetRef}
            type="button"
            class="size-4 shrink-0"
            onClick={() => otherActionsPopup.open()}
          >
            <EllipsisVertical />
          </button>
          {otherActionsPopup.popup()}
        </>
      </Show>
    </div>
  );
};

export default ColumnInfo;
