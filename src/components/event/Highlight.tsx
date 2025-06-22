import { Show, createMemo, type Component } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools/pure';

// eslint-disable-next-line import/no-cycle
import Actions from '@/components/Actions';
// eslint-disable-next-line import/no-cycle
import Post from '@/components/Post';
import LazyLoad from '@/components/utils/LazyLoad';
import SafeLink from '@/components/utils/SafeLink';
import useModalState from '@/hooks/useModalState';
import { genericEvent } from '@/nostr/event';

export type HighlightProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
};

const Highlight: Component<HighlightProps> = (props) => {
  const { showProfile } = useModalState();

  const event = createMemo(() => genericEvent(props.event));

  const comment = createMemo(() => event().findLastTagByName('comment')?.[1]);
  const r = createMemo(() => event().findLastTagByName('r')?.[1] || '');
  const content = createMemo(() => event().content);

  const actions = () => props.actions ?? true;

  return (
    <div class="nostr-highlight">
      <Post
        authorPubkey={event().pubkey}
        createdAt={event().createdAtAsDate()}
        content={
          <div class="highlight-content">
            <span class="text-xs">highlighted</span>
            {comment()?.length && <p>{comment()}</p>}
            {content()?.length && (
              <blockquote class="border-l-4 px-2">
                {content()}
                <br />
                <SafeLink class="text-link underline" href={r()} />
              </blockquote>
            )}
          </div>
        }
        actions={
          <Show when={actions()}>
            <LazyLoad fallback={<div class="h-5" />}>
              {() => <Actions event={props.event} />}
            </LazyLoad>
          </Show>
        }
        onShowProfile={() => {
          showProfile(event().pubkey);
        }}
      />
    </div>
  );
};

export default Highlight;
