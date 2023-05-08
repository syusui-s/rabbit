import { Component } from 'solid-js';

import MagnifyingGlass from 'heroicons/24/outline/magnifying-glass.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import Timeline from '@/components/timeline/Timeline';
import { SearchColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import { relaysForSearching } from '@/core/relayUrls';
import useConfig from '@/core/useConfig';
import useSubscription from '@/nostr/useSubscription';

type SearchColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: SearchColumnType;
};

const SearchColumn: Component<SearchColumnDisplayProps> = (props) => {
  const { removeColumn } = useConfig();

  const { events } = useSubscription(() => ({
    relayUrls: relaysForSearching,
    filters: [
      {
        kinds: [1, 6],
        search: props.column.query,
        limit: 25,
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
          name={props.column.name ?? '検索'}
          icon={<MagnifyingGlass />}
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

export default SearchColumn;
