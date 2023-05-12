export const relaysGlobal: string[] = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.snort.social',
];

export const relaysOnlyAvailableInJP: string[] = [
  'wss://relay-jp.nostr.wirednet.jp',
  // 'wss://nostr.h3z.jp',
  'wss://nostr.holybea.com',
];

export const relaysInJP: string[] = [
  ...relaysOnlyAvailableInJP,
  'wss://nostr.holybea.com',
  'wss://nostr-relay.nokotaro.com',
];

export const relaysForSearching: string[] = [
  'wss://relay.nostr.band',
  'wss://nostrja-kari-nip50.heguro.com',
  'wss://search.nos.today',
];
