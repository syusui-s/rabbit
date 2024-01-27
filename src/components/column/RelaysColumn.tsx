import { createEffect, Component } from 'solid-js';

import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Timeline from '@/components/timeline/Timeline';
import { RelaysColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useSubscription from '@/nostr/useSubscription';

type RelaysColumnDisplayProps = {
  column: RelaysColumnType;
};

const RelaysColumn: Component<RelaysColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { removeColumn } = useConfig();

  const loadMore = useLoadMore(() => ({
    duration: 4 * 60 * 60,
  }));

  const { events, eose } = useSubscription(() => ({
    relayUrls: props.column.relayUrls,
    filters: [
      {
        kinds: [1],
        limit: 20,
        since: loadMore.since(),
        until: loadMore.until(),
      },
    ],
    eoseLimit: 20,
    clientEventFilter: (event) => {
      if (props.column.contentFilter == null) return true;
      return applyContentFilter(props.column.contentFilter)(event.content);
    },
  }));

  createEffect(() => loadMore.setEvents(events()));

  return (
    <Column
      columnId={props.column.id}
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.relay')}
          icon={<GlobeAlt />}
          settings={() => <ColumnSettings column={props.column} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      timelineRef={loadMore.timelineRef}
    >
      <LoadMore loadMore={loadMore} eose={eose()}>
        <Timeline events={events()} />
      </LoadMore>
    </Column>
  );
};

export default RelaysColumn;
