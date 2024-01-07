import {
  createSignal,
  createMemo,
  batch,
  Show,
  type JSX,
  type Accessor,
  type Component,
} from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools';

import ColumnItem from '@/components/ColumnItem';
import useScroll from '@/hooks/useScroll';
import { useTranslation } from '@/i18n/useTranslation';
import { pickOldestEvent } from '@/nostr/event/comparator';
import epoch from '@/utils/epoch';

export type UseLoadMoreProps = {
  duration: number | null;
};

export type UseLoadMore = {
  timelineRef: (el: HTMLElement) => void;
  setEvents: (event: NostrEvent[]) => void;
  since: Accessor<number | undefined>;
  until: Accessor<number | undefined>;
  continuous: Accessor<boolean>;
  loadLatest: () => void;
  loadOld: () => void;
};

export type LoadMoreProps = {
  loadMore: UseLoadMore;
  children: JSX.Element;
  eose: boolean;
};

export const useLoadMore = (propsProvider: () => UseLoadMoreProps): UseLoadMore => {
  const props = createMemo(propsProvider);
  const calcSince = (base: number): number | undefined => {
    const { duration } = props();
    if (duration == null) return undefined;
    return base - duration;
  };

  const [events, setEvents] = createSignal<NostrEvent[]>([]);
  const [since, setSince] = createSignal<number | undefined>(calcSince(epoch()));
  const [until, setUntil] = createSignal<number | undefined>();
  const continuous = () => until() == null;

  const scroll = useScroll();

  const loadLatest = () => {
    batch(() => {
      setUntil(undefined);
      setSince(calcSince(epoch()));
    });
    scroll.scrollToTop();
  };

  const loadOld = () => {
    const oldest = pickOldestEvent(events());
    if (oldest == null) return;
    batch(() => {
      setUntil(oldest.created_at);
      setSince(calcSince(oldest.created_at));
    });
    scroll.scrollToTop();
  };

  return {
    timelineRef: scroll.targetRef,
    setEvents,
    since,
    until,
    continuous,
    loadLatest,
    loadOld,
  };
};

const LoadMore: Component<LoadMoreProps> = (props) => {
  const i18n = useTranslation();

  return (
    <>
      <Show when={!props.loadMore.continuous()}>
        <ColumnItem>
          <button
            class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary"
            onClick={() => props.loadMore.loadLatest()}
          >
            <span>{i18n()('column.loadLatest')}</span>
          </button>
        </ColumnItem>
      </Show>
      {props.children}
      <ColumnItem>
        <button
          class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary disabled:text-fg-secondary/30"
          disabled={!props.eose}
          onClick={() => props.loadMore.loadOld()}
        >
          <span>{i18n()('column.loadOld')}</span>
        </button>
      </ColumnItem>
    </>
  );
};

export default LoadMore;
