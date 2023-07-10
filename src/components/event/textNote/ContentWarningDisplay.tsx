import { createSignal, type Component, type JSX, Show } from 'solid-js';

import { useTranslation } from '@/i18n/useTranslation';
import { ContentWarning } from '@/nostr/event/TextNote';

export type ContentWarningDisplayProps = {
  contentWarning: ContentWarning;
  children: JSX.Element;
};

const ContentWarningDisplay: Component<ContentWarningDisplayProps> = (props) => {
  const i18n = useTranslation();
  const [showContentWarning, setShowContentWarning] = createSignal(false);

  return (
    <Show
      when={!props.contentWarning.contentWarning || showContentWarning()}
      fallback={
        <button
          class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow"
          onClick={() => setShowContentWarning(true)}
        >
          {i18n()('post.contentWarning.show')}
          <Show when={props.contentWarning.reason != null}>
            <br />
            <span>
              {i18n()('post.contentWarning.reason')}: {props.contentWarning.reason}
            </span>
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
