import ParameterizedReplaceableEvent from '@/nostr/event/ParameterizedReplaceableEvent';
import NostrSetTagsMixIn from '@/nostr/event/sets/NostrSetTagsMixIn';
import Tags from '@/nostr/event/Tags';

export const NostrSetTags = NostrSetTagsMixIn(Tags);

const NostrSet = NostrSetTagsMixIn(ParameterizedReplaceableEvent);

export default NostrSet;
