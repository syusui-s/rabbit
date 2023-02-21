import { createSignal, createEffect, Show, For } from 'solid-js';
import type { Component } from 'solid-js';

import Column from '@/components/Column';
import NotePostForm from '@/components/NotePostForm';
import SideBar from '@/components/SideBar';
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

  const { events: myPosts } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1],
        authors: [pubkeyHex],
        limit: 100,
      },
    ],
  }));

  const { events: followingsPosts } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      {
        kinds: [1],
        authors: followings()?.map((f) => f.pubkey) ?? [pubkeyHex],
        limit: 100,
        since: Math.floor(Date.now() / 1000) - 12 * 60 * 60,
      },
    ],
  }));

  const handlePost = ({ content }) => {
    commands.publishTextNote({ relayUrls: config().relayUrls, pubkey: pubkeyHex, content });
  };

  return (
    <div class="flex h-screen w-screen flex-row overflow-hidden">
      <SideBar postForm={() => <NotePostForm onPost={handlePost} />} />
      <div class="flex flex-row overflow-y-hidden overflow-x-scroll">
        <Column name="ホーム" width="widest">
          <For each={followingsPosts()}>{(ev) => <TextNote event={ev} />}</For>
        </Column>
        <Column name="自分の投稿" width="medium">
          <For each={myPosts()}>{(ev) => <TextNote event={ev} />}</For>
        </Column>
      </div>
    </div>
  );
};

export default Home;
