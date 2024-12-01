import { createEffect, Component, createSignal } from 'solid-js';

import Bell from 'heroicons/24/outline/bell.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column, { type ColumnOperator } from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Notification from '@/components/timeline/Notification';
import { NotificationColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useSubscription from '@/nostr/useSubscription';

type NotificationColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: NotificationColumnType;
};

const NotificationColumn: Component<NotificationColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const [columnOperator, setColumnOperator] = createSignal<ColumnOperator>();

  const loadMore = useLoadMore(() => ({
    duration: null,
    onLoad: () => {
      columnOperator()?.scrollToTop();
    },
  }));

  const { events: notifications, eose } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6, 7, 9735],
        '#p': [props.column.pubkey],
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

  createEffect(() => loadMore.setEvents(notifications()));

  return (
    <Column
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.notification')}
          icon={<Bell />}
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
        <Notification events={notifications()} />
      </LoadMore>
    </Column>
  );
};

export default NotificationColumn;
