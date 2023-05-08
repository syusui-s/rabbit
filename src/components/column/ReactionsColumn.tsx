import { Component } from 'solid-js';

import Heart from 'heroicons/24/outline/heart.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import Notification from '@/components/timeline/Notification';
import { ReactionsColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import useSubscription from '@/nostr/useSubscription';

type ReactionsColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: ReactionsColumnType;
};

const ReactionsColumn: Component<ReactionsColumnDisplayProps> = (props) => {
  const { config, removeColumn } = useConfig();

  const { events: reactions } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [7],
        authors: [props.column.pubkey],
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
          name={props.column.name ?? 'リアクション'}
          icon={<Heart />}
          settings={() => <ColumnSettings column={props.column} columnIndex={props.columnIndex} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
    >
      <Notification events={reactions()} />
    </Column>
  );
};

export default ReactionsColumn;
