import { Component, For } from 'solid-js';

import Bell from 'heroicons/24/outline/bell.svg';
import GlobeAlt from 'heroicons/24/outline/globe-alt.svg';
import Heart from 'heroicons/24/outline/heart.svg';
import Home from 'heroicons/24/outline/home.svg';
import MagnifyingGlass from 'heroicons/24/outline/magnifying-glass.svg';
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
  createSearchColumn,
} from '@/core/column';
import useConfig from '@/core/useConfig';
import { useRequestCommand } from '@/hooks/useCommandBus';
import { useTranslation } from '@/i18n/useTranslation';
import usePubkey from '@/nostr/usePubkey';
import ensureNonNull from '@/utils/ensureNonNull';

type AddColumnProps = {
  onClose: () => void;
};

const AddColumn: Component<AddColumnProps> = (props) => {
  const i18n = useTranslation();
  const pubkey = usePubkey();
  const { saveColumn } = useConfig();
  const request = useRequestCommand();

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
      onClick: addFollowingColumn,
    },
    {
      name: () => i18n.t('column.notification'),
      icon: () => <Bell />,
      onClick: addNotificationColumn,
    },
    {
      name: () => i18n.t('column.japanese'),
      icon: () => <GlobeAlt />,
      onClick: addJapanRelaysColumn,
    },
    {
      name: () => i18n.t('column.search'),
      icon: () => <MagnifyingGlass />,
      onClick: addSearchColumn,
    },
    {
      name: () => i18n.t('column.myPosts'),
      icon: () => <User />,
      onClick: addMyPostsColumn,
    },
    {
      name: () => i18n.t('column.myReactions'),
      icon: () => <Heart />,
      onClick: addMyReactionsColumn,
    },
    // TODO channel <ChatBubbleLeftRight />
    // TODO bookmark <BookmarkIcon />
  ];

  return (
    <BasicModal onClose={props.onClose}>
      <div class="flex flex-wrap p-4">
        <For each={menu}>
          {(menuItem) => (
            <button
              class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
              onClick={menuItem.onClick}
            >
              <span class="inline-block size-8">{menuItem.icon()}</span>
              {menuItem.name()}
            </button>
          )}
        </For>
      </div>
    </BasicModal>
  );
};

export default AddColumn;
