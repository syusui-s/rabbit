import { Component, Show, createEffect, onCleanup, onMount } from 'solid-js';

import BookmarkIcon from 'heroicons/24/outline/bookmark.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import Bookmark from '@/components/timeline/Bookmark';
import { BookmarkColumnType } from '@/core/column';
import useConfig from '@/core/useConfig';
import useDecrypt from '@/nostr/useDecrypt';
import useParameterizedReplaceableEvent from '@/nostr/useParameterizedReplaceableEvent';

type BookmarkColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: BookmarkColumnType;
};

const BookmarkColumn: Component<BookmarkColumnDisplayProps> = (props) => {
  const { removeColumn } = useConfig();

  const { event } = useParameterizedReplaceableEvent(() => ({
    kind: 30001,
    author: props.column.pubkey,
    identifier: props.column.identifier,
  }));

  return (
    <Column
      header={
        <BasicColumnHeader
          name={props.column.name ?? 'ブックマーク'}
          icon={<BookmarkIcon />}
          settings={() => <ColumnSettings column={props.column} columnIndex={props.columnIndex} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
    >
      <Show when={event()} keyed>
        {(ev) => <Bookmark event={ev} />}
      </Show>
    </Column>
  );
};

export default BookmarkColumn;
