import { createSignal, Show, For } from 'solid-js';
import type { Component } from 'solid-js';

import Column from '@/components/Column';
import NotePostForm from '@/components/NotePostForm';
import SideBar from '@/components/SideBar';
import Timeline from '@/components/Timeline';
import TextNote from '@/components/TextNote';
import useCommands from '@/clients/useCommands';
import useConfig from '@/clients/useConfig';
import useSubscription from '@/clients/useSubscription';
import useShortcutKeys from '@/hooks/useShortcutKeys';
import useFollowings from '@/clients/useFollowings';

/*
type UseRelayProps = { pubkey: string };


const publish = async (pool, event) => {
  const pub = pool.publish(writeRelays, event);

  return new Promise((resolve, reject) => {});
};
*/
// const relays = ['ws://localhost:8008'];
//
const pubkey = 'npub1jcsr6e38dcepf65nkmrc54mu8jd8y70eael9rv308wxpwep6sxwqgsscyc';
const pubkeyHex = '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c';

useShortcutKeys({
  onShortcut: (s) => console.log(s),
});

const Home: Component = () => {
  const [config] = useConfig();
  const commands = useCommands();
  const { followings } = useFollowings(() => ({
    relayUrls: config().relayUrls,
    pubkey: pubkeyHex,
  }));

  const { events: followingsPosts } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1, 6],
        authors: followings()?.map((f) => f.pubkey) ?? [pubkeyHex],
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
        authors: [pubkeyHex],
        limit: 25,
      },
    ],
  }));

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

  const handlePost = ({ content }: { content: string }) => {
    commands
      .publishTextNote({
        relayUrls: config().relayUrls,
        pubkey: pubkeyHex,
        content,
      })
      .then(() => {
        console.log('ok');
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  return (
    <div class="flex h-screen w-screen flex-row overflow-hidden">
      <SideBar postForm={() => <NotePostForm onPost={handlePost} />} />
      <div class="flex flex-row overflow-y-hidden overflow-x-scroll">
        <Column name="ホーム" width="widest">
          <TextNote
            event={
              {
                id: 12345,
                kind: 1,
                pubkey: pubkeyHex,
                created_at: Math.floor(Date.now() / 1000),
                tags: [],
                content: 'hello',
              } as NostrEvent
            }
          />
          <Timeline events={followingsPosts()} />
        </Column>
        <Column name="自分の投稿" width="medium">
          <Timeline events={myPosts()} />
        </Column>
        <Column name="#nostrstudy" width="medium">
          <Timeline events={searchPosts()} />
        </Column>
      </div>
    </div>
  );
};

export default Home;
