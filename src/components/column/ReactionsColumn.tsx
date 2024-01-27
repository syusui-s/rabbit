import { createEffect, Component } from 'solid-js';

import Heart from 'heroicons/24/outline/heart.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Timeline from '@/components/timeline/Timeline';
import { ReactionsColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useSubscription from '@/nostr/useSubscription';

type ReactionsColumnDisplayProps = {
  column: ReactionsColumnType;
};

const ReactionsColumn: Component<ReactionsColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const loadMore = useLoadMore(() => ({ duration: null }));

  const { events: reactions, eose } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [7],
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

  createEffect(() => loadMore.setEvents(reactions()));

  return (
    <Column
      columnId={props.column.id}
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.reactions')}
          icon={<Heart />}
          settings={() => <ColumnSettings column={props.column} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      timelineRef={loadMore.timelineRef}
    >
      <LoadMore loadMore={loadMore} eose={eose()}>
        <Timeline events={reactions()} />
      </LoadMore>
    </Column>
  );
};

export default ReactionsColumn;
