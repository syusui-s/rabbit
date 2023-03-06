import { createSignal, Show, For, createEffect } from 'solid-js';
import type { Component } from 'solid-js';

import Column from '@/components/Column';
import NotePostForm from '@/components/NotePostForm';
import SideBar from '@/components/SideBar';
import Timeline from '@/components/Timeline';
import Notification from '@/components/Notification';
import TextNote from '@/components/TextNote';
import usePool from '@/clients/usePool';
import useCommands from '@/clients/useCommands';
import useConfig from '@/clients/useConfig';
import useSubscription from '@/clients/useSubscription';
import useFollowings from '@/clients/useFollowings';
import usePubkey from '@/clients/usePubkey';
import useShortcutKeys from '@/hooks/useShortcutKeys';
import ensureNonNull from '@/hooks/ensureNonNull';

useShortcutKeys({
  onShortcut: (s) => console.log(s),
});

const Home: Component = () => {
  const pool = usePool();
  const [config] = useConfig();
  const pubkey = usePubkey();
  const commands = useCommands();

  createEffect(() => {
    config().relayUrls.map(async (relayUrl) => {
      const relay = await pool().ensureRelay(relayUrl);
      relay.on('notice', (msg) => {
        console.error(`NOTICE: ${relayUrl}: ${msg}`);
      });
    });
  });

  const { followings } = useFollowings(() => ({
    relayUrls: config().relayUrls,
    pubkey: pubkey(),
  }));

  const { events: followingsPosts } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6],
        authors: [...followings()?.map((f) => f.pubkey), pubkey()] ?? [pubkey()],
        limit: 25,
        since: Math.floor(Date.now() / 1000) - 12 * 60 * 60,
      },
    ],
  }));

  const { events: myPosts } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6],
        authors: [pubkey()],
        limit: 25,
      },
    ],
  }));

  const { events: notifications } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6, 7],
        '#p': [pubkey()],
        limit: 25,
        since: Math.floor(Date.now() / 1000) - 12 * 60 * 60,
      },
    ],
  }));

  const { events: localTimeline } = useSubscription(() => ({
    relayUrls: [
      'wss://relay-jp.nostr.wirednet.jp',
      'wss://nostr.h3z.jp/',
      'wss://nostr.holybea.com',
    ],
    filters: [
      {
        kinds: [1, 6],
        limit: 25,
        since: Math.floor(Date.now() / 1000) - 12 * 60 * 60,
      },
    ],
  }));

  /*
  const { events: searchPosts } = useSubscription(() => ({
    relayUrls: ['wss://relay.nostr.band/'],
    filters: [
      {
        kinds: [1],
        search: '#nostrstudy',
        limit: 25,
        since: Math.floor(Date.now() / 1000) - 12 * 60 * 60,
      },
    ],
  }));
   */

  const handlePost = ({ content }: { content: string }) => {
    commands
      .publishTextNote({
        relayUrls: config().relayUrls,
        pubkey: pubkey(),
        content,
      })
      .then(() => {
        console.log('ok');
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  const japaneseRegex = /[あ-ん]/;
  return (
    <div class="flex h-screen w-screen flex-row overflow-hidden">
      <SideBar postForm={() => <NotePostForm onPost={handlePost} />} />
      <div class="flex flex-row overflow-y-hidden overflow-x-scroll">
        <Column name="ホーム" width="widest">
          <Timeline events={followingsPosts()} />
        </Column>
        <Column name="通知" width="medium">
          <Notification events={notifications()} />
        </Column>
        <Column name="日本サーバ" width="medium">
          <Timeline events={localTimeline()} />
        </Column>
        <Column name="自分の投稿" width="medium">
          <Timeline events={myPosts()} />
        </Column>
      </div>
    </div>
  );
};

export default Home;
