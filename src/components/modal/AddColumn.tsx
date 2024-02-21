import { Component, For, Switch, Match, createSignal, type JSX } from 'solid-js';

import Bell from 'heroicons/24/outline/bell.svg';
import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import Heart from 'heroicons/24/outline/heart.svg';
import Home from 'heroicons/24/outline/home.svg';
import MagnifyingGlass from 'heroicons/24/outline/magnifying-glass.svg';
import Server from 'heroicons/24/outline/server.svg';
import User from 'heroicons/24/outline/user.svg';
// import BookmarkIcon from 'heroicons/24/outline/bookmark.svg';
// import ChatBubbleLeftRight from 'heroicons/24/outline/chat-bubble-left-right.svg';

import BasicModal from '@/components/modal/BasicModal';
import {
  createFollowingColumn,
  createJapanRelaysColumn,
  createNotificationColumn,
  createPostsColumn,
  createReactionsColumn,
  createRelaysColumn,
  createSearchColumn,
} from '@/core/column';
import useConfig from '@/core/useConfig';
import { useRequestCommand } from '@/hooks/useCommandBus';
import { useTranslation } from '@/i18n/useTranslation';
import usePubkey from '@/nostr/usePubkey';
import ensureNonNull from '@/utils/ensureNonNull';
import { isWebSocketUrl } from '@/utils/url';

type AddColumnProps = {
  onClose: () => void;
};

type AddRelayColumnProps = {
  addRelaysColumn: (relayUrls: string[]) => void;
};

const AddRelaysColumn: Component<AddRelayColumnProps> = (props) => {
  const i18n = useTranslation();
  const { config } = useConfig();

  const [relayUrl, setRelayUrl] = createSignal<string>('');

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();

    const url = relayUrl();
    if (!isWebSocketUrl(url)) {
      window.alert('Invalid url');
      return;
    }

    props.addRelaysColumn([url]);
  };

  return (
    <div class="p-8">
      <form class="flex gap-1" onSubmit={handleSubmit}>
        <input
          class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"
          type="text"
          name="url"
          placeholder="wss://..."
          pattern="wss?:\/\/.*"
          required
          onChange={(ev) => setRelayUrl(ev.currentTarget.value)}
        />
        <button
          class="rounded border border-primary px-4 py-1 font-bold text-primary"
          type="submit"
        >
          {i18n.t('column.addRelayColumn.add')}
        </button>
      </form>
      <div class="flex flex-col items-start gap-1 pt-8">
        <For each={config().relayUrls}>
          {(url) => (
            <button
              type="button"
              class="text-fg-secondary hover:text-fg"
              onClick={() => props.addRelaysColumn([url])}
            >
              {url}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};

const AddColumn: Component<AddColumnProps> = (props) => {
  const i18n = useTranslation();
  const pubkey = usePubkey();
  const { saveColumn } = useConfig();
  const request = useRequestCommand();

  const [detailComponent, setDetailComponent] = createSignal<string | undefined>(undefined);

  const finish = () => {
    props.onClose();
    request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
  };

  const addFollowingColumn = () => {
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => {
      saveColumn(createFollowingColumn({ pubkey: pubkeyNonNull }));
    });
    finish();
  };

  const addNotificationColumn = () => {
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => {
      saveColumn(createNotificationColumn({ pubkey: pubkeyNonNull }));
    });
    finish();
  };

  const addJapanRelaysColumn = () => {
    saveColumn(createJapanRelaysColumn());
    finish();
  };

  const addRelaysColumn = (relayUrls: string[]) => {
    saveColumn(createRelaysColumn({ relayUrls }));
    finish();
  };

  const addSearchColumn = () => {
    saveColumn(createSearchColumn({ query: '' }));
    finish();
  };

  const addMyPostsColumn = () => {
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => {
      saveColumn(createPostsColumn({ pubkey: pubkeyNonNull }));
    });
    finish();
  };

  const addMyReactionsColumn = () => {
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => {
      saveColumn(createReactionsColumn({ pubkey: pubkeyNonNull }));
    });
    finish();
  };

  const menu = [
    {
      name: () => i18n.t('column.home'),
      icon: () => <Home />,
      onSelect: addFollowingColumn,
    },
    {
      name: () => i18n.t('column.notification'),
      icon: () => <Bell />,
      onSelect: addNotificationColumn,
    },
    {
      name: () => i18n.t('column.relay'),
      icon: () => <Server />,
      onSelect: () => setDetailComponent('AddRelaysColumn'),
    },
    {
      name: () => i18n.t('column.japanese'),
      icon: () => <GlobeAlt />,
      onSelect: addJapanRelaysColumn,
    },
    {
      name: () => i18n.t('column.search'),
      icon: () => <MagnifyingGlass />,
      onSelect: addSearchColumn,
    },
    {
      name: () => i18n.t('column.myPosts'),
      icon: () => <User />,
      onSelect: addMyPostsColumn,
    },
    {
      name: () => i18n.t('column.myReactions'),
      icon: () => <Heart />,
      onSelect: addMyReactionsColumn,
    },
    // TODO channel <ChatBubbleLeftRight />
    // TODO bookmark <BookmarkIcon />
  ];

  return (
    <BasicModal onClose={props.onClose}>
      <Switch
        fallback={
          <div class="flex flex-wrap p-4">
            <For each={menu}>
              {(menuItem) => (
                <button
                  class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
                  onClick={menuItem.onSelect}
                >
                  <span class="inline-block size-8">{menuItem.icon()}</span>
                  {menuItem.name()}
                </button>
              )}
            </For>
          </div>
        }
      >
        <Match when={detailComponent() === 'AddRelaysColumn'}>
          <AddRelaysColumn addRelaysColumn={addRelaysColumn} />
        </Match>
      </Switch>
    </BasicModal>
  );
};

export default AddColumn;
