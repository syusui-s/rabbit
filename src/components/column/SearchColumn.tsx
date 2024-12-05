import { Component, createEffect, createSignal, Show, JSX, onMount } from 'solid-js';

import EllipsisVertical from 'heroicons/24/outline/ellipsis-vertical.svg';
import MagnifyingGlass from 'heroicons/24/outline/magnifying-glass.svg';

import Column, { type ColumnOperator } from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Timeline from '@/components/timeline/Timeline';
import { SearchColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import { relaysForSearching } from '@/core/relayUrls';
import useConfig from '@/core/useConfig';
import useSubscription from '@/nostr/useSubscription';

export type SearchColumnHeaderProps = {
  column: SearchColumnType;
  settings: () => JSX.Element;
  onClose?: () => void;
  onClickHeader?: () => void;
};

const SearchColumnHeader: Component<SearchColumnHeaderProps> = (props) => {
  const [isSettingsOpened, setIsSettingOpened] = createSignal(false);
  const [query, setQuery] = createSignal('');

  const { saveColumn } = useConfig();

  const toggleSettingsOpened = () => setIsSettingOpened((current) => !current);

  const updateQuery = () => {
    if (query() === props.column.query) return;
    saveColumn({ ...props.column, query: query() });
  };

  const handleBlur: JSX.EventHandler<HTMLInputElement, Event> = () => {
    updateQuery();
  };

  const handleChange: JSX.EventHandler<HTMLInputElement, Event> = (ev) => {
    setQuery(ev.currentTarget.value);
  };

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (ev) => {
    ev.preventDefault();
    updateQuery();
  };

  onMount(() => {
    setQuery(props.column.query);
  });

  return (
    <div class="flex flex-col">
      <div class="flex h-8 items-center gap-1 px-2">
        <h2 class="flex items-center">
          <button
            type="button"
            class="inline-block size-4 text-fg-secondary"
            onClick={() => props.onClickHeader?.()}
          >
            <MagnifyingGlass />
          </button>
        </h2>
        <form class="flex-1" onSubmit={handleSubmit}>
          <input
            class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"
            type="text"
            name="query"
            value={query()}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
        <button class="size-4" onClick={() => toggleSettingsOpened()}>
          <EllipsisVertical />
        </button>
      </div>
      <Show when={isSettingsOpened()}>{props.settings()}</Show>
    </div>
  );
};

export type SearchColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: SearchColumnType;
};

const SearchColumn: Component<SearchColumnDisplayProps> = (props) => {
  const { removeColumn } = useConfig();

  const [columnOperator, setColumnOperator] = createSignal<ColumnOperator>();

  const loadMore = useLoadMore(() => ({
    duration: null,
    onLoad: () => {
      columnOperator()?.scrollToTop();
    },
  }));

  const { events, eose } = useSubscription(() => {
    const { query } = props.column;

    if (query.length === 0) return null;

    return {
      relayUrls: relaysForSearching,
      filters: [
        {
          kinds: [1],
          search: query,
          limit: 20,
          since: loadMore.since(),
          until: loadMore.until(),
        },
      ],
      eoseLimit: 20,
      clientEventFilter: (event) => {
        if (event.tags.findIndex(([tagName]) => tagName === 'mostr' || tagName === 'proxy') >= 0)
          return false;
        if (props.column.contentFilter == null) return true;
        return applyContentFilter(props.column.contentFilter)(event.content);
      },
    };
  });

  createEffect(() => {
    loadMore.setEvents(events());
  });

  return (
    <Column
      header={
        <SearchColumnHeader
          column={props.column}
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

export default SearchColumn;
