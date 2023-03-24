// The original code was published under the public domain license (CC0-1.0).
// https://gist.github.com/syusui-s/cd5482ddfc83792b54a756759acbda55
import { type UnsignedEvent, type Event as NostrEvent } from 'nostr-tools';

type NostrAPI = {
  /** returns a public key as hex */
  getPublicKey(): Promise<string>;
  /** takes an event object, adds `id`, `pubkey` and `sig` and returns it */
  signEvent(event: UnsignedEvent): Promise<NostrEvent>;

  // Optional

  /** returns a basic map of relay urls to relay policies */
  getRelays?(): Promise<{ [url: string]: { read: boolean; write: boolean } }>;

  /** NIP-04: Encrypted Direct Messages */
  nip04?: {
    /** returns ciphertext and iv as specified in nip-04 */
    encrypt(pubkey: string, plaintext: string): Promise<string>;
    /** takes ciphertext and iv as specified in nip-04 */
    decrypt(pubkey: string, ciphertext: string): Promise<string>;
  };
};

declare global {
  interface Window {
    nostr?: NostrAPI;
  }
}
