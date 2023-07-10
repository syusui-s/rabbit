import { For, Switch, Match } from 'solid-js';

import BookmarkColumn from '@/components/column/BookmarkColumn';
import FollowingColumn from '@/components/column/FollwingColumn';
import NotificationColumn from '@/components/column/NotificationColumn';
import PostsColumn from '@/components/column/PostsColumn';
import ReactionsColumn from '@/components/column/ReactionsColumn';
import RelaysColumn from '@/components/column/RelaysColumn';
import SearchColumn from '@/components/column/SearchColumn';
import useConfig from '@/core/useConfig';

const Columns = () => {
  const { config } = useConfig();

  return (
    <div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">
      <For each={config().columns}>
        {(column, index) => {
          const columnIndex = () => index() + 1;
          const lastColumn = () => columnIndex() === config().columns.length;
          return (
            <Switch>
              <Match when={column.columnType === 'Following' && column} keyed>
                {(followingColumn) => (
                  <FollowingColumn
                    column={followingColumn}
                    columnIndex={columnIndex()}
                    lastColumn={lastColumn()}
                  />
                )}
              </Match>
              <Match when={column.columnType === 'Notification' && column} keyed>
                {(notificationColumn) => (
                  <NotificationColumn
                    column={notificationColumn}
                    columnIndex={columnIndex()}
                    lastColumn={lastColumn()}
                  />
                )}
              </Match>
              <Match when={column.columnType === 'Posts' && column} keyed>
                {(postsColumn) => (
                  <PostsColumn
                    column={postsColumn}
                    columnIndex={columnIndex()}
                    lastColumn={lastColumn()}
                  />
                )}
              </Match>
              <Match when={column.columnType === 'Reactions' && column} keyed>
                {(reactionsColumn) => (
                  <ReactionsColumn
                    column={reactionsColumn}
                    columnIndex={columnIndex()}
                    lastColumn={lastColumn()}
                  />
                )}
              </Match>
              <Match when={column.columnType === 'Relays' && column} keyed>
                {(reactionsColumn) => (
                  <RelaysColumn
                    column={reactionsColumn}
                    columnIndex={columnIndex()}
                    lastColumn={lastColumn()}
                  />
                )}
              </Match>
              <Match when={column.columnType === 'Bookmark' && column} keyed>
                {(bookmarkColumn) => (
                  <BookmarkColumn
                    column={bookmarkColumn}
                    columnIndex={columnIndex()}
                    lastColumn={lastColumn()}
                  />
                )}
              </Match>
              <Match when={column.columnType === 'Search' && column} keyed>
                {(reactionsColumn) => (
                  <SearchColumn
                    column={reactionsColumn}
                    columnIndex={columnIndex()}
                    lastColumn={lastColumn()}
                  />
                )}
              </Match>
            </Switch>
          );
        }}
      </For>
    </div>
  );
};

export default Columns;
