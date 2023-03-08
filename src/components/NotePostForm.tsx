import { createSignal, createMemo, onMount, type Component, type JSX } from 'solid-js';
import PaperAirplane from 'heroicons/24/solid/paper-airplane.svg';

type NotePostFormProps = {
  ref?: HTMLTextAreaElement | undefined;
  onPost: (textNote: { content: string }) => void;
  onClose: () => void;
};

const NotePostForm: Component<NotePostFormProps> = (props) => {
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

  const handleKeyDown: JSX.EventHandlerUnion<HTMLTextAreaElement, KeyboardEvent> = (ev) => {
    if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) {
      submit();
    } else if (ev.key === 'Escape') {
      props.onClose();
    }
  };

  const submitDisabled = createMemo(() => text().trim().length === 0);

  return (
    <div class="p-1">
      <form class="flex flex-col gap-1" onSubmit={handleSubmit}>
        <textarea
          ref={props.ref}
          name="text"
          class="rounded border-none"
          rows={4}
          placeholder="いまどうしてる？"
          onInput={handleChangeText}
          onKeyDown={handleKeyDown}
          value={text()}
        />
        <div class="grid justify-end">
          <button
            class="h-8 w-8 rounded bg-primary p-2 font-bold text-white"
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

export default NotePostForm;
