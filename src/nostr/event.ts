import { Kind, Event as NostrEvent } from 'nostr-tools';

import GenericEvent from '@/nostr/event/GenericEvent';
import TextNote from '@/nostr/event/TextNote';

export const genericEvent = (event: NostrEvent): GenericEvent => new GenericEvent(event);

export const textNote = (event: NostrEvent): TextNote => new TextNote(event);
