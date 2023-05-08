import { Show, type Component } from 'solid-js';

import ColumnItem from '@/components/ColumnItem';
import TextNoteDisplay, { TextNoteDisplayProps } from '@/components/textNote/TextNoteDisplay';
import useConfig from '@/core/useConfig';

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
