import {
  createSignal,
  Show,
  onMount,
  onCleanup,
  lazy,
  type JSX,
  type Component,
  For,
  createMemo,
} from 'solid-js';

import {
  DragDropProvider,
  DragDropSensors,
  type DragEventHandler,
  SortableProvider,
  createSortable,
  closestCenter,
  useDragDropContext,
  type Transformer,
} from '@thisbeyond/solid-dnd';
import Bell from 'heroicons/24/outline/bell.svg';
import BookmarkIcon from 'heroicons/24/outline/bookmark.svg';
import ChatBubbleLeftRight from 'heroicons/24/outline/chat-bubble-left-right.svg';
import Cog6Tooth from 'heroicons/24/outline/cog-6-tooth.svg';
import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import Heart from 'heroicons/24/outline/heart.svg';
import Home from 'heroicons/24/outline/home.svg';
import MagnifyingGlass from 'heroicons/24/outline/magnifying-glass.svg';
import Plus from 'heroicons/24/outline/plus.svg';
import User from 'heroicons/24/outline/user.svg';
import Users from 'heroicons/24/outline/users.svg';
import PencilSquare from 'heroicons/24/solid/pencil-square.svg';
import { type ParseKeys } from 'i18next';
import throttle from 'lodash/throttle';

import NotePostForm from '@/components/NotePostForm';
import usePopup from '@/components/utils/usePopup';
import { type ColumnType, createSearchColumn } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useHandleCommand, useRequestCommand } from '@/hooks/useCommandBus';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import isMobile from '@/utils/isMobile';
import resolveAsset from '@/utils/resolveAsset';

const Config = lazy(() => import('@/components/modal/Config'));

const useMediaWidth = () => {
  const [innerWidth, setInnerWidth] = createSignal(window.innerWidth);

  onMount(() => {
    const resizeHandler = throttle(() => {
      setInnerWidth(window.innerWidth);
    }, 200);
    window.addEventListener('resize', resizeHandler);
    onCleanup(() => {
      window.addEventListener('resize', resizeHandler);
    });
  });

  const isMediaSm = () => innerWidth() < 640;

  return { innerWidth, isMediaSm };
};

const SearchButton = () => {
  let inputRef: HTMLInputElement | undefined;

  const { saveColumn } = useConfig();
  const request = useRequestCommand();
  const [query, setQuery] = createSignal('');

  const handleSearchSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (ev) => {
    ev.preventDefault();

    saveColumn(createSearchColumn({ query: query() }));
    request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
    popup.close();
    setQuery('');
  };

  const popup = usePopup(() => ({
    popup: (
      <form
        class="flex w-72 items-center gap-1 rounded-md border border-border bg-bg p-4 shadow-md"
        onSubmit={handleSearchSubmit}
      >
        <input
          ref={inputRef}
          class="h-8 w-full rounded border border-border bg-bg focus:border-primary focus:ring-border"
          type="text"
          value={query()}
          onChange={(ev) => setQuery(ev.currentTarget.value)}
        />
        <button class="size-8 rounded bg-primary p-1 text-primary-fg" type="submit">
          <MagnifyingGlass />
        </button>
      </form>
    ),
    position: { x: 'right', y: 0 },
  }));

  return (
    <>
      <button
        ref={popup.targetRef}
        class="w-full py-1"
        type="button"
        onClick={() => {
          popup.open();
          inputRef?.focus();
        }}
      >
        <span class="inline-block size-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary hover:border-primary-hover hover:text-primary-hover">
          <MagnifyingGlass />
        </span>
      </button>
      {popup.popup()}
    </>
  );
};

type ColumnKind = ColumnType['columnType'];
const columns: Readonly<Record<ColumnKind, { icon: string /* svg */; nameKey: ParseKeys }>> = {
  Bookmark: {
    icon: BookmarkIcon,
    nameKey: 'column.bookmark',
  },
  Channel: {
    icon: ChatBubbleLeftRight,
    nameKey: 'column.channel',
  },
  Following: {
    icon: Home,
    nameKey: 'column.home',
  },
  Notification: {
    icon: Bell,
    nameKey: 'column.notification',
  },
  Posts: {
    icon: User,
    nameKey: 'column.posts',
  },
  Reactions: {
    icon: Heart,
    nameKey: 'column.reactions',
  },
  Relays: {
    icon: GlobeAlt,
    nameKey: 'column.relay',
  },
  FollowSet: {
    icon: Users,
    nameKey: 'column.followSet',
  },
  Search: { icon: MagnifyingGlass, nameKey: 'column.search' },
};

const ColumnButton: Component<{ column: ColumnType; index: number }> = (props) => {
  const i18n = useTranslation();

  const sortable = createSortable(props.column.id);

  const request = useRequestCommand();
  const jumpToColumn = () => {
    request({
      command: 'moveToColumn',
      columnIndex: props.index,
    }).catch((err) => console.error(err));
  };

  const Icon = createMemo(() => columns[props.column.columnType].icon);
  const columnNameKey = createMemo(() => columns[props.column.columnType].nameKey);

  return (
    <button
      // https://github.com/thisbeyond/solid-dnd/issues/60
      // https://github.com/thisbeyond/solid-dnd/issues/68
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      use:sortable
      class="relative flex w-full touch-none flex-col items-center py-3 text-primary select-none hover:text-primary-hover"
      onClick={() => jumpToColumn()}
      title={props.column.name ?? i18n.t(columnNameKey())}
    >
      <span class="inline-block size-6">
        <Icon />
      </span>
      <span class="absolute right-0 bottom-2 text-xs text-primary">{props.index}</span>
    </button>
  );
};

const ConstrainDragAxis = () => {
  const dragDropContext = useDragDropContext();
  const actions = dragDropContext?.[1];

  const transformer: Transformer = {
    id: 'constrain-x-axis',
    order: 100,
    callback: (transform) => ({ ...transform, x: 0 }),
  };

  actions?.onDragStart(({ draggable }) => {
    actions?.addTransformer('draggables', draggable.id, transformer);
  });

  actions?.onDragEnd(({ draggable }) => {
    actions?.removeTransformer('draggables', draggable.id, transformer.id);
  });

  return <></>;
};

const ColumnButtons: Component = () => {
  const { config, moveColumnById } = useConfig();

  const columnIds = () => config().columns.map((column) => column.id);

  const handleDragEnd: DragEventHandler = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      const columnId = draggable?.id as string;
      const insertBeforeId = droppable?.id as string;
      moveColumnById(columnId, insertBeforeId);
    }
  };

  return (
    <div class="scrollbar flex w-full grow overflow-x-hidden overflow-y-auto border-y border-primary/30 px-2">
      <div class="size-full flex-col items-center justify-center py-2">
        <DragDropProvider onDragEnd={handleDragEnd} collisionDetector={closestCenter}>
          <DragDropSensors />
          <ConstrainDragAxis />
          <SortableProvider ids={columnIds()}>
            <For each={config().columns}>
              {(column, index) => <ColumnButton column={column} index={index() + 1} />}
            </For>
          </SortableProvider>
        </DragDropProvider>
      </div>
    </div>
  );
};

const SideBar: Component = () => {
  let textAreaRef: HTMLTextAreaElement | undefined;

  const { showAddColumn, showAbout } = useModalState();
  const { config, getColorTheme } = useConfig();
  const { isMediaSm } = useMediaWidth();

  const [formOpened, setFormOpened] = createSignal(false);
  const [configOpened, setConfigOpened] = createSignal(false);

  const focusTextArea = () => {
    textAreaRef?.focus();
    textAreaRef?.click();
    textAreaRef?.setSelectionRange(0, 0);
  };
  const openForm = () => setFormOpened(true);
  const closeForm = () => setFormOpened(false);
  const toggleForm = () => setFormOpened((current) => !current);

  const shouldUseMobileUI = () => isMobile() && isMediaSm();

  const handleClickOpenForm = () => {
    toggleForm();
    if (formOpened()) focusTextArea();
  };

  useHandleCommand(() => ({
    commandType: 'openPostForm',
    handler: () => {
      setTimeout(() => {
        openForm();
        focusTextArea();
      }, 10);
    },
  }));

  return (
    <div class="flex shrink-0 flex-row bg-r-sidebar">
      <div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-border pt-4">
        <div class="flex w-full flex-col items-center">
          <Show
            when={shouldUseMobileUI()}
            fallback={
              <button class="static w-full px-0 py-1" type="button" onClick={handleClickOpenForm}>
                <span class="inline-block size-9 rounded-full border border-primary bg-primary p-2 text-2xl text-primary-fg">
                  <PencilSquare />
                </span>
              </button>
            }
          >
            <button
              class="absolute bottom-0 left-[calc(50vw-2rem)] p-4"
              type="button"
              onClick={handleClickOpenForm}
            >
              <span class="inline-block size-14 rounded-full border-2 border-primary-fg bg-primary p-3 text-2xl text-primary-fg drop-shadow-md hover:bg-primary-hover">
                <PencilSquare />
              </span>
            </button>
          </Show>
          <SearchButton />
        </div>
        <ColumnButtons />
        <div class="flex w-full flex-col items-center gap-2 pb-2">
          <button
            class="flex w-full flex-col items-center py-1 text-primary hover:text-primary-hover"
            onClick={() => showAddColumn()}
          >
            <span class="inline-block size-6">
              <Plus />
            </span>
          </button>
          <button
            class="flex w-full flex-col items-center py-1 text-primary hover:text-primary-hover"
            onClick={() => setConfigOpened((current) => !current)}
          >
            <span class="size-6">
              <Cog6Tooth />
            </span>
          </button>
          <button class="flex w-full flex-col items-center" onClick={() => showAbout()}>
            <img
              class="size-8"
              src={resolveAsset(getColorTheme().rabbitIconPath)}
              alt="About rabbit"
            />
          </button>
        </div>
      </div>
      <Show
        when={shouldUseMobileUI()}
        fallback={
          <div
            class="w-56 border-r border-border bg-r-sidebar px-2 pt-2"
            classList={{
              static: formOpened() || config().keepOpenPostForm,
              hidden: !(formOpened() || config().keepOpenPostForm),
            }}
          >
            <NotePostForm
              textAreaRef={(el) => {
                textAreaRef = el;
              }}
              onClose={closeForm}
            />
          </div>
        }
      >
        <div
          class="absolute bottom-0 left-20 z-10 w-[calc(100vw-8rem)] rounded-md border-t border-border bg-r-sidebar px-2 pt-2 shadow"
          classList={{
            static: formOpened() || config().keepOpenPostForm,
            hidden: !(formOpened() || config().keepOpenPostForm),
          }}
        >
          <NotePostForm
            textAreaRef={(el) => {
              textAreaRef = el;
            }}
            closable
            onClose={closeForm}
          />
        </div>
      </Show>
      <Show when={configOpened()}>
        <Config onClose={() => setConfigOpened(false)} />
      </Show>
    </div>
  );
};

export default SideBar;
