import type { Component } from 'solid-js';

export type TextNoteProps = {
  content: string;
  createdAt: Date;
};

const TextNote: Component<TextNoteProps> = (props) => {
  return (
    <div class="textnote flex w-full flex-row gap-1 overflow-hidden border-b p-1">
      <div class="author-icon shrink-0">
        <img
          src="https://i.gyazo.com/883119a7763e594d30c5706a62969d52.jpg"
          alt="author icon"
          // TODO autofit
          class="w-10 rounded"
        />
      </div>
      <div class="min-w-0 flex-auto">
        <div class="flex justify-between gap-1 text-xs">
          <div class="author flex min-w-0">
            {/* TODO link to profile */}
            <div class="author-name font-bold">Author</div>
            <div class="author-username truncate pl-1">@aauthorauthorauthorauthorauthoruthor</div>
          </div>
          <div class="created-at shrink-0">{props.createdAt.toLocaleTimeString()}</div>
        </div>
        <div class="content whitespace-pre-wrap break-all">{props.content}</div>
      </div>
    </div>
  );
};

export default TextNote;
