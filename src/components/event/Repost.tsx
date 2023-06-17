// NIP-18
import { type Component, createMemo } from 'solid-js';

import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import { Event as NostrEvent } from 'nostr-tools';

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
      <div class="flex content-center text-xs">
        <div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true">
          <ArrowPathRoundedSquare />
        </div>
        <div class="flex-1 truncate break-all">
          <button
            class="hover:text-blue-500 hover:underline"
            onClick={() => showProfile(props.event.pubkey)}
          >
            <UserDisplayName pubkey={props.event.pubkey} />
          </button>
          {i18n()('notification.reposted')}
        </div>
        <div>{formatDate(event().createdAtAsDate())}</div>
      </div>
      <div class="pt-1">
        <EventDisplayById eventId={eventId()} />
      </div>
    </div>
  );
};

export default Repost;
