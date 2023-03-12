// NIP-18 (DEPRECATED)
import { Show, Switch, Match, type Component, createMemo } from 'solid-js';
import { Event as NostrEvent } from 'nostr-tools';
import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';

import useConfig from '@/nostr/useConfig';
import useEvent from '@/nostr/useEvent';
import useProfile from '@/nostr/useProfile';

import ColumnItem from '@/components/ColumnItem';
import UserDisplayName from '@/components/UserDisplayName';
import TextNote from '@/components/TextNote';
import eventWrapper from '@/core/event';
import useFormatDate from '@/hooks/useFormatDate';
import TextNoteDisplayById from './textNote/TextNoteDisplayById';

export type DeprecatedRepostProps = {
  event: NostrEvent;
};

const DeprecatedRepost: Component<DeprecatedRepostProps> = (props) => {
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
          <UserDisplayName pubkey={props.event.pubkey} />
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
