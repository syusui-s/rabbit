import type { PlainText } from '@/nostr/parseTextNote';

export type PlainTextDisplayProps = {
  plainText: PlainText;
};

const PlainTextDisplay = (props: PlainTextDisplayProps) => {
  return <span>{props.plainText.content}</span>;
};

export default PlainTextDisplay;
