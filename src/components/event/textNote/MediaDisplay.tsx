import { type Component, type JSX, createSignal, Show } from 'solid-js';

import { Dynamic } from 'solid-js/web';

import LazyLoad from '@/components/utils/LazyLoad';

type MediaDisplayProps = {
  initialHidden: boolean;
  children: (props: { error: () => void }) => JSX.Element;
  placeholder: JSX.Element;
  fallback: JSX.Element;
  showButtonText: string;
};

const MediaDisplay: Component<MediaDisplayProps> = (props) => {
  const [hidden, setHidden] = createSignal(props.initialHidden);
  const [isError, setIsError] = createSignal(false);

  return (
    <Show
      when={!hidden()}
      fallback={
        <button
          class="bg-bg-tertiary text-fg-secondary rounded p-3 text-xs hover:shadow"
          onClick={() => setHidden(false)}
        >
          {props.showButtonText}
        </button>
      }
    >
      <LazyLoad fallback={props.placeholder}>
        {() => (
          <Show when={!isError()} fallback={props.fallback}>
            <Dynamic component={props.children} error={() => setIsError(true)} />
          </Show>
        )}
      </LazyLoad>
    </Show>
  );
};

export default MediaDisplay;
