import { Component, JSX, Show, createSignal } from 'solid-js';

import LazyLoad from '@/components/utils/LazyLoad';
import useDetectOverflow from '@/hooks/useDetectOverflow';
import useFormatDate from '@/hooks/useFormatDate';
import { useTranslation } from '@/i18n/useTranslation';
import useProfile from '@/nostr/useProfile';
import npubEncodeFallback from '@/utils/npubEncodeFallback';
import { thumbnailUrl } from '@/utils/url';

export type PostProps = {
  authorPubkey: string;
  createdAt: Date;
  content: JSX.Element;
  actions?: JSX.Element;
  footer?: JSX.Element;
  onShowProfile?: () => void;
  onShowEvent?: () => void;
};

const Post: Component<PostProps> = (props) => {
  const i18n = useTranslation();
  const { overflow, elementRef } = useDetectOverflow();
  const formatDate = useFormatDate();

  const [showOverflow, setShowOverflow] = createSignal(false);
  const createdAt = () => formatDate(props.createdAt);
  const createdAtFull = () => props.createdAt.toLocaleString();

  const { profile: author } = useProfile(() => ({
    pubkey: props.authorPubkey,
  }));

  return (
    <div class="post flex flex-col">
      <div class="flex w-full gap-1">
        <button
          type="button"
          class="author-icon h-10 w-10 shrink-0 overflow-hidden rounded"
          onClick={(ev) => {
            ev.preventDefault();
            props.onShowProfile?.();
          }}
        >
          <Show when={author()?.picture} keyed>
            {(url) => (
              <LazyLoad>
                {() => (
                  <img
                    src={thumbnailUrl(url, 'icon')}
                    alt="icon"
                    referrerpolicy="no-referrer"
                    class="h-full w-full object-cover"
                  />
                )}
              </LazyLoad>
            )}
          </Show>
        </button>
        <div class="min-w-0 flex-auto">
          <div class="flex justify-between gap-1 text-xs">
            <button
              type="button"
              class="author flex min-w-0 select-text truncate hover:text-link"
              onClick={(ev) => {
                ev.preventDefault();
                props?.onShowProfile?.();
              }}
            >
              <span class="author flex min-w-0 truncate hover:text-link">
                <Show when={(author()?.display_name?.length ?? 0) > 0}>
                  <div class="author-name truncate pr-1 font-bold hover:underline">
                    {author()?.display_name}
                  </div>
                </Show>
                <div class="author-username truncate text-fg-secondary">
                  <Show
                    when={author()?.name != null}
                    fallback={`@${npubEncodeFallback(props.authorPubkey)}`}
                  >
                    @{author()?.name}
                  </Show>
                  {/* TODO <Match when={author()?.nip05 != null}>@{author()?.nip05}</Match> */}
                </div>
              </span>
            </button>
            <div class="created-at shrink-0">
              <button
                type="button"
                class="select-text hover:underline"
                onClick={(ev) => {
                  ev.preventDefault();
                  props.onShowEvent?.();
                }}
                title={createdAtFull()}
              >
                {createdAt()}
              </button>
            </div>
          </div>
          <div
            ref={elementRef}
            class="overflow-hidden"
            classList={{ 'max-h-screen': !showOverflow(), 'max-h-none': showOverflow() }}
          >
            {props.content}
          </div>
          <Show when={overflow()}>
            <button
              class="mt-2 w-full rounded border border-border p-2 text-center text-xs text-fg-secondary shadow-sm hover:bg-bg-tertiary hover:shadow"
              onClick={(ev) => {
                ev.stopPropagation();
                setShowOverflow((current) => !current);
              }}
            >
              <Show when={!showOverflow()} fallback={i18n()('post.hideOverflow')}>
                {i18n()('post.showOverflow')}
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
