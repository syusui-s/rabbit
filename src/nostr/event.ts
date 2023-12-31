import { Event as NostrEvent } from 'nostr-tools/pure';

import GenericEvent from '@/nostr/event/GenericEvent';
import Reaction from '@/nostr/event/Reaction';
import TextNote from '@/nostr/event/TextNote';
import ZapReceipt from '@/nostr/event/ZapReceipt';

export const genericEvent = (event: NostrEvent): GenericEvent => new GenericEvent(event);

export const textNote = (event: NostrEvent): TextNote => new TextNote(event);

export const reaction = (event: NostrEvent): Reaction => new Reaction(event);

export const zapReceipt = (event: NostrEvent): ZapReceipt => new ZapReceipt(event);
