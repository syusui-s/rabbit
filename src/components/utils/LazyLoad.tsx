import { Component, JSX, Show, createSignal, onCleanup, onMount } from 'solid-js';

export type LazyLoadProps = {
  threshold?: number[] | number;
  fallback?: JSX.Element;
  children: () => JSX.Element;
};

const LazyLoad: Component<LazyLoadProps> = (props) => {
  let containerRef: HTMLDivElement | undefined;

  const [visible, setVisible] = createSignal<boolean>(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: props.threshold ?? 0,
      },
    );
    if (containerRef != null) {
      observer.observe(containerRef);
    }

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <Show when={visible()} fallback={<div ref={containerRef}>{props.fallback}</div>} keyed>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {(_) => props.children()}
    </Show>
  );
};

export default LazyLoad;
