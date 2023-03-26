import { type Component } from 'solid-js';

import ColumnItem from '@/components/ColumnItem';
import TextNoteDisplay, { TextNoteDisplayProps } from './textNote/TextNoteDisplay';

export type TextNoteProps = TextNoteDisplayProps;

const TextNote: Component<TextNoteProps> = (props) => {
  return (
    <ColumnItem>
      <TextNoteDisplay {...props} />
    </ColumnItem>
  );
};

export default TextNote;
