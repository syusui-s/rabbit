import { createSignal, type Component, type JSX, Show } from 'solid-js';

import { ContentWarning } from '@/core/event';

export type ContentWarningDisplayProps = {
  contentWarning: ContentWarning;
  children: JSX.Element;
};

const ContentWarningDisplay: Component<ContentWarningDisplayProps> = (props) => {
  const [showContentWarning, setShowContentWarning] = createSignal(false);

  return (
    <Show
      when={!props.contentWarning.contentWarning || showContentWarning()}
      fallback={
        <button
          class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow"
          onClick={() => setShowContentWarning(true)}
        >
          表示するにはクリック
          <Show when={props.contentWarning.reason != null}>
            <br />
            <span>理由: {props.contentWarning.reason}</span>
          </Show>
        </button>
      }
    >
      <div>{props.children}</div>
      <Show when={props.contentWarning.contentWarning}>
        <button
          class="text-xs text-stone-600 hover:text-stone-800"
          onClick={() => setShowContentWarning(false)}
        >
          隠す
        </button>
      </Show>
    </Show>
  );
};

export default ContentWarningDisplay;
