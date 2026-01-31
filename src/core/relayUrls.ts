export const relaysGlobal: string[] = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.snort.social',
  'relay.nostr.wirednet.jp',
];

// 日本語タイムライン用のリレーリスト（日本国内限定・日本語中心のリレー）
export const relaysForJapaneseTL: string[] = [
  'wss://relay-jp.nostr.wirednet.jp',
  'wss://r.kojira.io',
  'wss://yabu.me', // note130lx92q6dayqx8v98gahwxaq3vkgg4upqdvaa4w8t7yptcgjs4asjc7awf
];

export const relaysInJP: string[] = [...relaysForJapaneseTL];

export const relaysForSearching: string[] = ['wss://relay.nostr.band', 'wss://search.nos.today'];
