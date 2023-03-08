import { createEffect, onMount, type Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import Column from '@/components/Column';
import SideBar from '@/components/SideBar';
import Timeline from '@/components/Timeline';
import Notification from '@/components/Notification';

import usePool from '@/nostr/usePool';
import useConfig from '@/nostr/useConfig';
import useSubscription from '@/nostr/useSubscription';
import useFollowings from '@/nostr/useFollowings';
import usePubkey from '@/nostr/usePubkey';

import { useMountShortcutKeys } from '@/hooks/useShortcutKeys';
import useLoginStatus from '@/hooks/useLoginStatus';
import ensureNonNull from '@/utils/ensureNonNull';

const Home: Component = () => {
  useMountShortcutKeys();
  const navigate = useNavigate();
  const { loginStatus } = useLoginStatus();

  const pool = usePool();
  const [config] = useConfig();
  const pubkey = usePubkey();

  createEffect(() => {
    config().relayUrls.map(async (relayUrl) => {
      const relay = await pool().ensureRelay(relayUrl);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relay.on('notice', (msg: any) => {
        console.error(`NOTICE: ${relayUrl}: ${msg}`);
      });
    });
  });

  const { followingPubkeys } = useFollowings(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      relayUrls: config().relayUrls,
      pubkey: pubkeyNonNull,
    })),
  );

  const { events: followingsPosts } = useSubscription(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      relayUrls: config().relayUrls,
      filters: [
        {
          kinds: [1, 6],
          authors: [...followingPubkeys(), pubkeyNonNull],
          limit: 25,
          since: Math.floor(Date.now() / 1000) - 12 * 60 * 60,
        },
      ],
    })),
  );

  const { events: myPosts } = useSubscription(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      relayUrls: config().relayUrls,
      filters: [
        {
          kinds: [1, 6],
          authors: [pubkeyNonNull],
          limit: 25,
        },
      ],
    })),
  );

  const { events: notifications } = useSubscription(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      relayUrls: config().relayUrls,
      filters: [
        {
          kinds: [1, 6, 7],
          '#p': [pubkeyNonNull],
          limit: 25,
          since: Math.floor(Date.now() / 1000) - 12 * 60 * 60,
        },
      ],
    })),
  );

  const { events: localTimeline } = useSubscription(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
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
    })),
  );

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

  onMount(() => {
    if (!loginStatus().loggedIn) {
      navigate('/hello');
    }
  });

  return (
    <div class="flex h-screen w-screen flex-row overflow-hidden">
      <SideBar />
      <div class="flex h-full flex-row overflow-y-hidden overflow-x-scroll">
        <Column name="ホーム" columnIndex={1} width="widest">
          <Timeline events={followingsPosts()} />
        </Column>
        <Column name="通知" columnIndex={2} width="medium">
          <Notification events={notifications()} />
        </Column>
        <Column name="日本サーバ" columnIndex={3} width="medium">
          <Timeline events={localTimeline()} />
        </Column>
        <Column name="自分の投稿" colmnIndex={4} lastColumn width="medium">
          <Timeline events={myPosts()} />
        </Column>
      </div>
    </div>
  );
};

export default Home;
