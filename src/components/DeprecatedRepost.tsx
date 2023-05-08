// NIP-18 (DEPRECATED)
import { type Component, createMemo } from 'solid-js';

import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import { Event as NostrEvent } from 'nostr-tools';

import ColumnItem from '@/components/ColumnItem';
import TextNoteDisplayById from '@/components/textNote/TextNoteDisplayById';
import UserDisplayName from '@/components/UserDisplayName';
import useFormatDate from '@/hooks/useFormatDate';
import useModalState from '@/hooks/useModalState';
import eventWrapper from '@/nostr/event';

export type DeprecatedRepostProps = {
  event: NostrEvent;
};

const DeprecatedRepost: Component<DeprecatedRepostProps> = (props) => {
  const { showProfile } = useModalState();
  const formatDate = useFormatDate();
  const repostedId = () => props.event.tags.find(([tagName]) => tagName === 'e')?.[1];
  const event = createMemo(() => eventWrapper(props.event));

  return (
    <ColumnItem>
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
          {' がリポスト'}
        </div>
        <div>{formatDate(event().createdAtAsDate())}</div>
      </div>
      <div class="pt-1">
        <TextNoteDisplayById eventId={repostedId()} />
      </div>
    </ColumnItem>
  );
};

export default DeprecatedRepost;
