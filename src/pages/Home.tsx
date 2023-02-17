import { createSignal, createEffect, Show, For } from 'solid-js';
import type { Component } from 'solid-js';

import Column from '@/components/Column';
import NotePostForm from '@/components/NotePostForm';
import SideBar from '@/components/SideBar';
import TextNote from '@/components/TextNote';
import useCommands from '@/clients/useCommands';
import useSubscription from '@/clients/useSubscription';
import useShortcutKeys from '@/hooks/useShortcutKeys';

/*
type UseRelayProps = { pubkey: string };


const publish = async (pool, event) => {
  const pub = pool.publish(writeRelays, event);

  return new Promise((resolve, reject) => {});
};
*/
// const relays = ['ws://localhost:8008'];
//
//  'wss://relay.damus.io',
//  'wss://nos.lol',
//  'wss://brb.io',
//  'wss://relay.snort.social',
//  'wss://relay.current.fyi',
//  'wss://relay.nostr.wirednet.jp',
const relayUrls = ['wss://relay-jp.nostr.wirednet.jp', 'wss://nostr.h3z.jp/'];
const pubkey = 'npub1jcsr6e38dcepf65nkmrc54mu8jd8y70eael9rv308wxpwep6sxwqgsscyc';
const pubkeyHex = '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c';

const Home: Component = () => {
  useShortcutKeys({
    onShortcut: (s) => console.log(s),
  });
  const { publishTextNote } = useCommands();

  const { events } = useSubscription({
    relayUrls,
    filters: [
      {
        kinds: [1],
        authors: [pubkeyHex],
        limit: 100,
        since: Math.floor(Date.now() / 1000) - 48 * 60 * 60,
      },
    ],
  });

  const handlePost = ({ content }) => {
    publishTextNote({ relayUrls, pubkey: pubkeyHex, content });
  };

  return (
    <div class="flex h-screen w-screen flex-row overflow-hidden">
      <SideBar postForm={() => <NotePostForm onPost={handlePost} />} />
      <div class="flex flex-row overflow-x-scroll">
        <Column width="widest">
          <For each={events()}>
            {(ev) => <TextNote content={ev.content} createdAt={new Date(ev.created_at * 1000)} />}
          </For>
        </Column>
        <Column width="medium">
          <For each={events()}>
            {(ev) => <TextNote content={ev.content} createdAt={new Date(ev.created_at * 1000)} />}
          </For>
        </Column>
        <Column width="narrow">
          <For each={events()}>
            {(ev) => <TextNote content={ev.content} createdAt={new Date(ev.created_at * 1000)} />}
          </For>
        </Column>
        <Column width="narrow">
          <For each={events()}>
            {(ev) => <TextNote content={ev.content} createdAt={new Date(ev.created_at * 1000)} />}
          </For>
        </Column>
      </div>
    </div>
  );
};

export default Home;
