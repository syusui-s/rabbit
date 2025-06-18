import { type Component, createSignal, Show } from 'solid-js';

import BookmarkIcon from 'heroicons/24/outline/bookmark.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column, { type ColumnOperator } from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import Bookmark from '@/components/timeline/Bookmark';
import { type BookmarkColumnType } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useParameterizedReplaceableEvent from '@/nostr/useParameterizedReplaceableEvent';

type BookmarkColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: BookmarkColumnType;
};

const BookmarkColumn: Component<BookmarkColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { removeColumn } = useConfig();

  const [columnOperator, setColumnOperator] = createSignal<ColumnOperator>();

  const { event } = useParameterizedReplaceableEvent(() => ({
    kind: 30001,
    author: props.column.pubkey,
    identifier: props.column.identifier,
  }));

  // TODO 暗号化されたデータがある場合は復号する

  return (
    <Column
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.bookmark')}
          icon={<BookmarkIcon />}
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
      <Show when={event()} keyed>
        {(ev) => <Bookmark event={ev} />}
      </Show>
    </Column>
  );
};

export default BookmarkColumn;
