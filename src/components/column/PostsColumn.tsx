import { createEffect, type Component, createSignal } from 'solid-js';

import User from 'heroicons/24/outline/user.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column, { type ColumnOperator } from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Timeline from '@/components/timeline/Timeline';
import { type PostsColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useSubscription from '@/nostr/useSubscription';

type PostsColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: PostsColumnType;
};

const PostsColumn: Component<PostsColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const [columnOperator, setColumnOperator] = createSignal<ColumnOperator>();

  const loadMore = useLoadMore(() => ({
    duration: null,
    onLoad: () => {
      columnOperator()?.scrollToTop();
    },
  }));

  const { events, eose } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6],
        authors: [props.column.pubkey],
        limit: 10,
        since: loadMore.since(),
        until: loadMore.until(),
      },
    ],
    eoseLimit: 10,
    clientEventFilter: (event) => {
      if (props.column.contentFilter == null) return true;
      return applyContentFilter(props.column.contentFilter)(event.content);
    },
  }));

  createEffect(() => loadMore.setEvents(events()));

  return (
    <Column
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.posts')}
          icon={<User />}
          settings={() => <ColumnSettings column={props.column} columnIndex={props.columnIndex} />}
          onClose={() => removeColumn(props.column.id)}
          onClickHeader={() => columnOperator()?.scrollToTop()}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
      columnOperatorRef={setColumnOperator}
    >
      <LoadMore loadMore={loadMore} eose={eose()}>
        <Timeline events={events()} />
      </LoadMore>
    </Column>
  );
};

export default PostsColumn;
