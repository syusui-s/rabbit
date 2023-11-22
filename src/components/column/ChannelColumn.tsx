import { Component } from 'solid-js';

import ChatBubbleLeftRight from 'heroicons/24/outline/chat-bubble-left-right.svg';
import { Kind } from 'nostr-tools';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import Timeline from '@/components/timeline/Timeline';
import { ChannelColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useSubscription from '@/nostr/useSubscription';
import epoch from '@/utils/epoch';

export type ChannelColumnProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: ChannelColumnType;
};

const ChannelColumn: Component<ChannelColumnProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [Kind.ChannelMessage],
        limit: 10,
        '#e': [props.column.id],
        since: epoch() - 4 * 60 * 60,
      },
    ],
    clientEventFilter: (event) => {
      if (props.column.contentFilter == null) return true;
      return applyContentFilter(props.column.contentFilter)(event.content);
    },
  }));

  return (
    <Column
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n()('column.channel')}
          icon={<ChatBubbleLeftRight />}
          settings={() => <ColumnSettings column={props.column} columnIndex={props.columnIndex} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
    >
      <Timeline events={events()} />
    </Column>
  );
};

export default ChannelColumn;
