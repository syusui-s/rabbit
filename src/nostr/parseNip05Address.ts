import { NIP05_REGEX } from 'nostr-tools/nip05';

export type ParsedNip05Address = {
  user?: string;
  domain: string;
  ident: string;
};

const parseNip05Address = (ident: string | undefined): ParsedNip05Address | null => {
  if (ident == null || ident.length === 0) return null;

  const match = ident.match(NIP05_REGEX);
  if (match == null) return null;

  const [, user, domain] = match;

  // (This is not standardized in NIP-05)
  // local-part can be optional here. nip05 can contain only the domain name.
  // This follows nostr-tools implementation.
  if (user == null || user === '_') {
    return { user: '_', domain, ident: domain };
  }

  return { user, domain, ident };
};

export default parseNip05Address;
