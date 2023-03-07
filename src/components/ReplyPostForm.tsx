import { createSignal, createMemo, type Component, type JSX } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools';

import PaperAirplane from 'heroicons/24/solid/paper-airplane.svg';

type ReplyPostFormProps = {
  replyTo: NostrEvent;
  onPost: (textNote: { content: string }) => void;
  onClose: () => void;
};

const ReplyPostForm: Component<ReplyPostFormProps> = (props: ReplyPostFormProps) => {
  const [text, setText] = createSignal<string>('');

  const clearText = () => setText('');

  const handleChangeText: JSX.EventHandler<HTMLTextAreaElement, Event> = (ev) => {
    setText(ev.currentTarget.value);
  };

  // TODO 投稿完了したかどうかの検知をしたい
  const submit = () => {
    props.onPost({ content: text() });
    clearText();
  };

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    submit();
  };

  const handleKeyDown: JSX.EventHandler<HTMLTextAreaElement, KeyboardEvent> = (ev) => {
    if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) {
      submit();
    }
  };

  const submitDisabled = createMemo(() => text().trim().length === 0);

  return (
    <div class="p-1">
      <div>
        {'Replying to '}
        {props.replyTo.pubkey}
      </div>
      <form class="grid w-full gap-1" onSubmit={handleSubmit}>
        <textarea
          name="text"
          class="rounded border-none"
          rows={4}
          placeholder="返信を投稿"
          onInput={handleChangeText}
          onKeyDown={handleKeyDown}
          value={text()}
        />
        <div class="flex justify-between">
          {/* TODO あとでちゃんとアイコンにする */}
          <button onClick={() => props.onClose()}>X</button>
          <button
            class="h-7 w-7 rounded bg-primary p-2 font-bold text-white"
            classList={{ 'bg-primary-disabled': submitDisabled(), 'bg-primary': !submitDisabled() }}
            type="submit"
            disabled={submitDisabled()}
          >
            <PaperAirplane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyPostForm;
