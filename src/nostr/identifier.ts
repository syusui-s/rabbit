export type ReplaceableEventIdentifier = {
  kind: number;
  pubkey: string;
  identifier?: string;
};

export const replaceableEventIdentifier = (identifier: ReplaceableEventIdentifier): string => {
  if (identifier.identifier != null) {
    return `${identifier.kind}:${identifier.pubkey}:${identifier.identifier}`;
  }
  return `${identifier.kind}:${identifier.pubkey}`;
};
