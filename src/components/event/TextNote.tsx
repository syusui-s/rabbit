import { Show, type Component } from 'solid-js';

import ColumnItem from '@/components/ColumnItem';
// eslint-disable-next-line import/no-cycle
import TextNoteDisplay, { TextNoteDisplayProps } from '@/components/event/textNote/TextNoteDisplay';
import useConfig from '@/core/useConfig';

export type TextNoteProps = TextNoteDisplayProps;

const TextNote: Component<TextNoteProps> = (props) => {
  const { shouldMuteEvent } = useConfig();

  return (
    <Show when={!shouldMuteEvent(props.event)}>
      <TextNoteDisplay {...props} />
    </Show>
  );
};

export default TextNote;
