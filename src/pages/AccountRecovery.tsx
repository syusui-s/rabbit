import type { Component } from 'solid-js';
import { getEventHash, relayInit } from 'nostr-tools';

const relays = [
  'wss://brb.io',
  'wss://nostr.h3z.jp',
  'wss://relay.damus.io',
  'wss://relay.snort.social',
  'wss://relay.nostr.wirednet.jp',
  'wss://relay-jp.nostr.wirednet.jp',
  'wss://nos.lol',
  'wss://eden.nostr.land',
  'wss://nostr-pub.wellorder.net',
  'wss://nostr.bitcoiner.social',
  'wss://offchain.pub',
  'wss://relay.current.fyi',
  'wss://nostr.relayer.se',
  'wss://relay.realsearch.cc',
  'wss://jiggytom.ddns.net',
  // 'wss://nostr.fly.dev',
  // 'wss://nostr-relay.untethr.me',
];

/*
 *{
  "event": {
    "kind": 0,
    "content": "{\"name\":\"syusui_s\",\"about\":\"多分復活\",\"picture\":\"https://i.gyazo.com/883119a7763e594d30c5706a62969d52.jpg\",\"display_name\":\"しゅうすい\",\"nip05\":\"_@syusui-s.github.io\"}",
    "tags": [],
    "created_at": 1676255623,
    "pubkey": "96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c",
    "id": "8776d66d9de4c59abddb0eb83214247edd68b5bc61fa3657b134cf892f8f7610"
  }
}
 */

const recover = async () => {
  const event = {
    kind: 0,
    content:
      '{"name":"syusui_s","about":"","display_name":"しゅうすい","picture":"https://i.gyazo.com/883119a7763e594d30c5706a62969d52.jpg","nip05":"_@syusui-s.github.io"}',
    tags: [],
    created_at: Math.floor(new Date() / 1000),
    pubkey: '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c',
  };
  event.id = getEventHash(event);
  const signedEvent = await window.nostr.signEvent(event);

  console.log(signedEvent);

  for (const url of relays) {
    console.log(url);

    const relay = relayInit(url);
    await relay.connect();

    const pub = relay.publish(signedEvent);

    pub.on('ok', () => {
      console.log(`${url} has accepted our event`);
    });
    pub.on('seen', () => {
      console.log(`we saw the event on ${url}`);
    });
    pub.on('failed', (reason) => {
      console.log(`failed to publish to ${url}: ${reason}`);
    });
  }

  console.log('done');
};

const AccountRecovery: Component = () => {
  const handleClick = () => {
    recover();
  };

  return (
    <div>
      <button onClick={handleClick}>回復</button>
    </div>
  );
};

export default AccountRecovery;
