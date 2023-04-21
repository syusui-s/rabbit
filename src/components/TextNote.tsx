import { Show, type Component } from 'solid-js';

import ColumnItem from '@/components/ColumnItem';
import useConfig from '@/nostr/useConfig';
import TextNoteDisplay, { TextNoteDisplayProps } from './textNote/TextNoteDisplay';

export type TextNoteProps = TextNoteDisplayProps;

const TextNote: Component<TextNoteProps> = (props) => {
  const { shouldMuteEvent } = useConfig();

  return (
    <Show when={!shouldMuteEvent(props.event)}>
      <ColumnItem>
        <TextNoteDisplay {...props} />
      </ColumnItem>
    </Show>
  );
};

export default TextNote;
