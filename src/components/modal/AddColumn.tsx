import { Component } from 'solid-js';

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

  return (
    <BasicModal onClose={props.onClose}>
      <div class="flex flex-wrap p-4">
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
          onClick={() => addFollowingColumn()}
        >
          <span class="inline-block size-8">
            <Home />
          </span>
          {i18n.t('column.home')}
        </button>
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
          onClick={() => addNotificationColumn()}
        >
          <span class="inline-block size-8">
            <Bell />
          </span>
          {i18n.t('column.notification')}
        </button>
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
          onClick={() => addJapanRelaysColumn()}
        >
          <span class="inline-block size-8">
            <GlobeAlt />
          </span>
          {i18n.t('column.japanese')}
        </button>
        {/*
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"
          onClick={() => window.alert()}
        >
          <span class="inline-block h-8 w-8">
            <ChatBubbleLeftRight />
          </span>
          チャンネル
        </button>
        */}
        {/*
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"
          onClick={() => addBookmarkColumn()}
        >
          <span class="inline-block h-8 w-8">
            <BookmarkIcon />
          </span>
          ブックマーク
        </button>
        */}
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
          onClick={() => addSearchColumn()}
        >
          <span class="inline-block size-8">
            <MagnifyingGlass />
          </span>
          {i18n.t('column.search')}
        </button>
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
          onClick={() => addMyPostsColumn()}
        >
          <span class="inline-block size-8">
            <User />
          </span>
          {i18n.t('column.myPosts')}
        </button>
        <button
          class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"
          onClick={() => addMyReactionsColumn()}
        >
          <span class="inline-block size-8">
            <Heart />
          </span>
          {i18n.t('column.myReactions')}
        </button>
      </div>
    </BasicModal>
  );
};

export default AddColumn;
