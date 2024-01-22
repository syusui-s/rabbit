// NIP-18
import { type Component, createMemo } from 'solid-js';

import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import { type Event as NostrEvent } from 'nostr-tools/pure';

// eslint-disable-next-line import/no-cycle
import EventDisplayById from '@/components/event/EventDisplayById';
import UserDisplayName from '@/components/UserDisplayName';
import useFormatDate from '@/hooks/useFormatDate';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import { genericEvent } from '@/nostr/event';

export type RepostProps = {
  event: NostrEvent;
};

const Repost: Component<RepostProps> = (props) => {
  const i18n = useTranslation();
  const { showProfile } = useModalState();
  const formatDate = useFormatDate();
  const event = createMemo(() => genericEvent(props.event));
  const eventId = () => event().lastTaggedEventId();

  return (
    <div>
      <div class="flex items-center gap-1">
        <div class="flex shrink-0 place-items-center pl-[2px]" aria-hidden="true">
          <span class="size-4 text-r-repost">
            <ArrowPathRoundedSquare />
          </span>
        </div>
        <div class="notification-user flex min-w-0 flex-1 overflow-hidden text-xs">
          <button
            class="select-text truncate hover:text-link hover:underline"
            onClick={() => showProfile(props.event.pubkey)}
          >
            <UserDisplayName pubkey={props.event.pubkey} />
          </button>
          <span class="shrink-0">{i18n.t('notification.reposted')}</span>
        </div>
        <div class="text-xs">{formatDate(event().createdAtAsDate())}</div>
      </div>
      <div class="pt-1">
        <EventDisplayById eventId={eventId()} />
      </div>
    </div>
  );
};

export default Repost;
