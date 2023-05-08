import { Component } from 'solid-js';

import Bell from 'heroicons/24/outline/bell.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import Notification from '@/components/timeline/Notification';
import { NotificationColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import useSubscription from '@/nostr/useSubscription';

type NotificationColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: NotificationColumnType;
};

const NotificationColumn: Component<NotificationColumnDisplayProps> = (props) => {
  const { config, removeColumn } = useConfig();

  const { events: notifications } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6, 7],
        '#p': [props.column.pubkey],
        limit: 10,
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
          name={props.column.name ?? '通知'}
          icon={<Bell />}
          settings={() => <ColumnSettings column={props.column} columnIndex={props.columnIndex} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
    >
      <Notification events={notifications()} />
    </Column>
  );
};

export default NotificationColumn;
