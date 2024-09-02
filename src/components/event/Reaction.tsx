import { type Component, Show } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools/pure';

import EmojiDisplay from '@/components/EmojiDisplay';
import EventDisplay from '@/components/event/EventDisplay';
import useEmojiPopup from '@/components/useEmojiPopup';
import UserDisplayName from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import useFormatDate from '@/hooks/useFormatDate';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import { reaction } from '@/nostr/event';
import useEvent from '@/nostr/useEvent';
import useProfile from '@/nostr/useProfile';
import ensureNonNull from '@/utils/ensureNonNull';
import { thumbnailUrl } from '@/utils/url';

type ReactionDisplayProps = {
  event: NostrEvent;
};

const ReactionDisplay: Component<ReactionDisplayProps> = (props) => {
  const i18n = useTranslation();
  const formatDate = useFormatDate();
  const { shouldMuteEvent } = useConfig();
  const { showProfile } = useModalState();
  const event = () => reaction(props.event);
  const eventId = () => event().lastTaggedEventId();

  const { profile } = useProfile(() => ({
    pubkey: props.event.pubkey,
  }));

  const { event: reactedEvent, query: reactedEventQuery } = useEvent(() =>
    ensureNonNull([eventId()] as const)(([eventIdNonNull]) => ({
      eventId: eventIdNonNull,
    })),
  );

  const isRemoved = () => reactedEventQuery.isSuccess && reactedEvent() == null;

  const emojiPopup = useEmojiPopup(() => ({
    reactionTypes: event().toReactionTypes(),
  }));

  return (
    // if the reacted event is not found, it should be a removed event
    <Show when={!isRemoved() && !shouldMuteEvent(props.event)}>
      <div class="flex items-center gap-1 pl-[2px] text-sm">
        <span
          ref={emojiPopup.emojiRef}
          class="webkit-touch-callout-none notification-icon flex h-4 min-w-4 max-w-[64px] shrink-0 select-none place-items-center overflow-hidden"
        >
          <EmojiDisplay reactionTypes={event().toReactionTypes()} />
        </span>
        {emojiPopup.popup()}
        <div class="notification-user flex flex-1 gap-1 overflow-hidden">
          <div class="author-icon size-5 shrink-0 overflow-hidden rounded">
            <Show when={profile()?.picture} keyed>
              {(url) => (
                <img
                  src={thumbnailUrl(url, 'icon')}
                  alt="icon"
                  // TODO autofit
                  class="size-full object-cover"
                />
              )}
            </Show>
          </div>
          <div class="flex min-w-0 flex-1 overflow-hidden">
            <button
              class="select-text truncate font-bold hover:text-link hover:underline"
              onClick={() => showProfile(props.event.pubkey)}
            >
              <UserDisplayName pubkey={props.event.pubkey} />
            </button>
            <span class="shrink-0 whitespace-pre">{i18n.t('notification.reacted')}</span>
          </div>
        </div>
        <div class="text-xs">{formatDate(event().createdAtAsDate())}</div>
      </div>
      <div class="notification-event py-1">
        <Show
          when={reactedEvent()}
          fallback={
            <div class="truncate">
              {i18n.t('general.loading')} {eventId()}
            </div>
          }
          keyed
        >
          {(ev) => <EventDisplay event={ev} />}
        </Show>
      </div>
    </Show>
  );
};

export default ReactionDisplay;
