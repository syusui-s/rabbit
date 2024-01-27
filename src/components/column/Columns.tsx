import { For, Switch, Match } from 'solid-js';

import BookmarkColumn from '@/components/column/BookmarkColumn';
import FollowingColumn from '@/components/column/FollowingColumn';
import NotificationColumn from '@/components/column/NotificationColumn';
import PostsColumn from '@/components/column/PostsColumn';
import ReactionsColumn from '@/components/column/ReactionsColumn';
import RelaysColumn from '@/components/column/RelaysColumn';
import SearchColumn from '@/components/column/SearchColumn';
import useConfig from '@/core/useConfig';
import { useHandleCommand } from '@/hooks/useCommandBus';
import useCursor from '@/hooks/useCursor';

const Columns = () => {
  const { config } = useConfig();

  const { cursor, setCursor } = useCursor();

  const updateCursor = (updateIndex: (index: number) => number) => {
    const current = cursor();
    const index = config().columns.findIndex(({ id }) => id === current.columnId);
    if (index < 0) return;

    const newIndex = updateIndex(index);
    const column = config().columns[newIndex];

    setCursor({ columnId: column.id });
  };

  useHandleCommand(() => ({
    commandType: 'moveToPrevColumn',
    handler: () => {
      updateCursor((index) => Math.max(index - 1, 0));
    },
  }));

  useHandleCommand(() => ({
    commandType: 'moveToNextColumn',
    handler: () => {
      updateCursor((index) => Math.min(index + 1, config().columns.length - 1));
    },
  }));

  useHandleCommand(() => ({
    commandType: 'moveToColumn',
    handler: (command) => {
      if (
        command.command === 'moveToColumn' &&
        command.columnIndex >= 0 &&
        command.columnIndex < config().columns.length
      ) {
        updateCursor(() => command.columnIndex);
      }
    },
  }));

  useHandleCommand(() => ({
    commandType: 'moveToLastColumn',
    handler: () => {
      updateCursor(() => config().columns.length - 1);
      // columnDivRef?.scrollIntoView({ behavior: 'smooth' });
    },
  }));

  return (
    <div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">
      <For each={config().columns}>
        {(column) => (
          <Switch>
            <Match when={column.columnType === 'Following' && column} keyed>
              {(followingColumn) => <FollowingColumn column={followingColumn} />}
            </Match>
            <Match when={column.columnType === 'Notification' && column} keyed>
              {(notificationColumn) => <NotificationColumn column={notificationColumn} />}
            </Match>
            <Match when={column.columnType === 'Posts' && column} keyed>
              {(postsColumn) => <PostsColumn column={postsColumn} />}
            </Match>
            <Match when={column.columnType === 'Reactions' && column} keyed>
              {(reactionsColumn) => <ReactionsColumn column={reactionsColumn} />}
            </Match>
            <Match when={column.columnType === 'Relays' && column} keyed>
              {(reactionsColumn) => <RelaysColumn column={reactionsColumn} />}
            </Match>
            <Match when={column.columnType === 'Bookmark' && column} keyed>
              {(bookmarkColumn) => <BookmarkColumn column={bookmarkColumn} />}
            </Match>
            <Match when={column.columnType === 'Search' && column} keyed>
              {(reactionsColumn) => <SearchColumn column={reactionsColumn} />}
            </Match>
          </Switch>
        )}
      </For>
    </div>
  );
};

export default Columns;
