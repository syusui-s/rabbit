import { Component, JSX, Show, createSignal } from 'solid-js';

import useDetectOverflow from '@/hooks/useDetectOverflow';
import useFormatDate from '@/hooks/useFormatDate';

export type PostProps = {
  author: JSX.Element;
  createdAt: Date;
  content: JSX.Element;
  actions?: JSX.Element;
  footer?: JSX.Element;
  authorPictureUrl?: string;
  onShowProfile?: () => void;
  onShowEvent?: () => void;
};

const Post: Component<PostProps> = (props) => {
  const { overflow, elementRef } = useDetectOverflow();
  const formatDate = useFormatDate();

  const [showOverflow, setShowOverflow] = createSignal();
  const createdAt = () => formatDate(props.createdAt);

  return (
    <div class="post flex flex-col">
      <div class="flex w-full gap-1">
        <button
          type="button"
          class="author-icon h-10 w-10 shrink-0 overflow-hidden"
          onClick={(ev) => {
            ev.preventDefault();
            props.onShowProfile?.();
          }}
        >
          <Show when={props.authorPictureUrl} keyed>
            {(url) => <img src={url} alt="icon" class="h-full w-full rounded object-cover" />}
          </Show>
        </button>
        <div class="min-w-0 flex-auto">
          <div class="flex justify-between gap-1 text-xs">
            <button
              type="button"
              class="author flex min-w-0 truncate hover:text-blue-500"
              onClick={(ev) => {
                ev.preventDefault();
                props?.onShowProfile?.();
              }}
            >
              {props.author}
            </button>
            <div class="created-at shrink-0">
              <button
                type="button"
                class="hover:underline"
                onClick={(ev) => {
                  ev.preventDefault();
                  props.onShowEvent?.();
                }}
              >
                {createdAt()}
              </button>
            </div>
          </div>
          <div
            ref={elementRef}
            class="overflow-hidden"
            classList={{ 'max-h-screen': !showOverflow() }}
          >
            {props.content}
          </div>
          <Show when={overflow()}>
            <button
              class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow"
              onClick={(ev) => {
                ev.stopPropagation();
                setShowOverflow((current) => !current);
              }}
            >
              <Show when={!showOverflow()} fallback="隠す">
                続きを読む
              </Show>
            </button>
          </Show>
          <div class="actions">{props.actions}</div>
        </div>
      </div>
      <Show when={props.footer}>{props.footer}</Show>
    </div>
  );
};

export default Post;
