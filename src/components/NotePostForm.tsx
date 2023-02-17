import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import PaperAirplane from 'heroicons/24/solid/paper-airplane.svg';

const NotePostForm: Component = (props) => {
  const [text, setText] = createSignal('');

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault(true);
    props.onPost({ content: text() });
  };

  return (
    <div class="p-1">
      <form class="grid w-64 gap-1" onSubmit={handleSubmit}>
        <textarea
          name="text"
          class="rounded border-none"
          rows={4}
          placeholder="いまどうしてる？"
          onChange={(ev) => {
            setText(ev.target.value);
          }}
          value={text()}
        />
        <div class="grid justify-end">
          <button class="h-8 w-8 rounded bg-primary p-2 font-bold text-white" type="submit">
            <PaperAirplane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotePostForm;
