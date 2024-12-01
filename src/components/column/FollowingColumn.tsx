import { Component, createEffect, createSignal, onCleanup, onMount } from 'solid-js';

import Home from 'heroicons/24/outline/home.svg';
import uniq from 'lodash/uniq';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column, { type ColumnOperator } from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Timeline from '@/components/timeline/Timeline';
import { FollowingColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useFollowings from '@/nostr/useFollowings';
import useSubscription from '@/nostr/useSubscription';

type FollowingColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: FollowingColumnType;
};

const FollowingColumn: Component<FollowingColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const { followingPubkeys } = useFollowings(() => ({ pubkey: props.column.pubkey }));

  const [columnOperator, setColumnOperator] = createSignal<ColumnOperator>();

  const loadMore = useLoadMore(() => ({
    duration: 4 * 60 * 60,
  }));

  const { events, eose } = useSubscription(() => {
    const authors = uniq([...followingPubkeys()]);
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

  createEffect(() => {
    console.log('home', events());
    loadMore.setEvents(events());
  });

  onMount(() => console.log('home timeline mounted'));
  onCleanup(() => console.log('home timeline unmounted'));

  return (
    <Column
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.home')}
          icon={<Home />}
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

export default FollowingColumn;
