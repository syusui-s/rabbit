import { createSignal, type Component, type JSX, Show } from 'solid-js';

import ExclamationTriangle from 'heroicons/24/outline/exclamation-triangle.svg';

import { useTranslation } from '@/i18n/useTranslation';
import { type ContentWarning } from '@/nostr/event/TextNoteLike';

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
          class="mt-2 flex w-full flex-col items-center rounded-sm border border-border p-2 text-center text-xs text-fg-secondary"
          onClick={() => setShowContentWarning(true)}
        >
          <span class="inline-block size-4">
            <ExclamationTriangle />
          </span>
          <span>{i18n.t('post.contentWarning.show')}</span>
          <Show when={props.contentWarning.reason != null}>
            <span>
              {i18n.t('post.contentWarning.reason')}: {props.contentWarning.reason}
            </span>
          </Show>
        </button>
      }
    >
      <div>{props.children}</div>
      <Show when={props.contentWarning.contentWarning}>
        <button
          class="text-xs text-fg-secondary hover:text-fg-secondary/70"
          onClick={() => setShowContentWarning(false)}
        >
          {i18n.t('post.contentWarning.hide')}
        </button>
      </Show>
    </Show>
  );
};

export default ContentWarningDisplay;
