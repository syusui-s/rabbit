import { type Component, Show } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools';

import EmojiDisplay from '@/components/EmojiDisplay';
import TextNoteDisplay from '@/components/event/textNote/TextNoteDisplay';
import UserDisplayName from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import { reaction } from '@/nostr/event';
import useEvent from '@/nostr/useEvent';
import useProfile from '@/nostr/useProfile';
import ensureNonNull from '@/utils/ensureNonNull';

type ReactionDisplayProps = {
  event: NostrEvent;
};

const ReactionDisplay: Component<ReactionDisplayProps> = (props) => {
  const i18n = useTranslation();
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

  return (
    // if the reacted event is not found, it should be a removed event
    <Show when={!isRemoved() || shouldMuteEvent(props.event)}>
      <div class="flex gap-1 px-1 text-sm">
        <div class="notification-icon flex max-w-[64px] place-items-center">
          <EmojiDisplay reactionTypes={event().toReactionTypes()} />
        </div>
        <div class="notification-user flex gap-1 overflow-hidden">
          <div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover">
            <Show when={profile()?.picture != null}>
              <img
                src={profile()?.picture}
                alt="icon"
                // TODO autofit
                class="rounded"
              />
            </Show>
          </div>
          <div class="flex-1 overflow-hidden">
            <button
              class="truncate font-bold hover:text-blue-500 hover:underline"
              onClick={() => showProfile(props.event.pubkey)}
            >
              <UserDisplayName pubkey={props.event.pubkey} />
            </button>
            {i18n()('notification.reacted')}
          </div>
        </div>
      </div>
      <div class="notification-event py-1">
        <Show
          when={reactedEvent()}
          fallback={
            <div class="truncate">
              {i18n()('general.loading')} {eventId()}
            </div>
          }
          keyed
        >
          {(ev) => <TextNoteDisplay event={ev} />}
        </Show>
      </div>
    </Show>
  );
};

export default ReactionDisplay;
