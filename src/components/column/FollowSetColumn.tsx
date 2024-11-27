import { Component } from 'solid-js';

import Users from 'heroicons/24/outline/users.svg';
import uniq from 'lodash/uniq';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Timeline from '@/components/timeline/Timeline';
import { FollowSetColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useFollowSet from '@/nostr/useFollowSet';
import useSubscription from '@/nostr/useSubscription';

type FollowingColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: FollowSetColumnType;
};

const FollowingColumn: Component<FollowingColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const { followSet, title, pubkeys } = useFollowSet(() => ({
    author: props.column.author,
    identifier: props.column.identifier,
  }));

  const columnName = () =>
    props.column.name || title() || followSet()?.identifier() || i18n.t('column.followSet');

  const loadMore = useLoadMore(() => ({ duration: null }));

  const { events, eose } = useSubscription(() => {
    const authors = uniq([...pubkeys()]);
    if (authors.length === 0) return null;
    return {
      debugId: 'following',
      relayUrls: config().relayUrls,
      filters: [
        {
          kinds: [1, 6],
          authors,
          limit: 20,
          since: loadMore.since(),
          until: loadMore.until(),
        },
      ],
      eoseLimit: 20,
      continuous: loadMore.continuous(),
      onEOSE: () => {
        console.log('home: eose');
      },
      clientEventFilter: (event) => {
        if (props.column.contentFilter == null) return true;
        return applyContentFilter(props.column.contentFilter)(event.content);
      },
    };
  });

  return (
    <Column
      header={
        <BasicColumnHeader
          name={columnName()}
          icon={<Users />}
          settings={() => <ColumnSettings column={props.column} columnIndex={props.columnIndex} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
    >
      <LoadMore loadMore={loadMore} eose={eose()}>
        <Timeline events={events()} />
      </LoadMore>
    </Column>
  );
};

export default FollowingColumn;
