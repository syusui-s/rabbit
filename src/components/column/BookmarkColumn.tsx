import { Component, Show } from 'solid-js';

import BookmarkIcon from 'heroicons/24/outline/bookmark.svg';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings from '@/components/column/ColumnSettings';
import Bookmark from '@/components/timeline/Bookmark';
import { BookmarkColumnType } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useParameterizedReplaceableEvent from '@/nostr/useParameterizedReplaceableEvent';

type BookmarkColumnDisplayProps = {
  column: BookmarkColumnType;
};

const BookmarkColumn: Component<BookmarkColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { removeColumn } = useConfig();

  const { event } = useParameterizedReplaceableEvent(() => ({
    kind: 30001,
    author: props.column.pubkey,
    identifier: props.column.identifier,
  }));

  // TODO 暗号化されたデータがある場合は復号する

  return (
    <Column
      columnId={props.column.id}
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.bookmark')}
          icon={<BookmarkIcon />}
          settings={() => <ColumnSettings column={props.column} />}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
    >
      <Show when={event()} keyed>
        {(ev) => <Bookmark event={ev} />}
      </Show>
    </Column>
  );
};

export default BookmarkColumn;
