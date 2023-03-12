import { type Component } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools';

import ColumnItem from '@/components/ColumnItem';
import TextNoteDisplay from './textNote/TextNoteDisplay';

export type TextNoteProps = {
  event: NostrEvent;
};

const TextNote: Component<TextNoteProps> = (props) => {
  return (
    <ColumnItem>
      <TextNoteDisplay event={props.event} />
    </ColumnItem>
  );
};

export default TextNote;
