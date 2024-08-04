import { Component, Show, JSX } from 'solid-js';

type SafeLinkProps = {
  class?: string;
  href: string;
  children?: JSX.Element;
};

const SafeLink: Component<SafeLinkProps> = (props) => {
  const isSafe = () => {
    try {
      const url = new URL(props.href.toString());
      return url.protocol === 'https:' || url.protocol === 'http:' || url.protocol === 'mailto:';
    } catch {
      return false;
    }
  };

  return (
    <Show when={isSafe()} fallback={props.href}>
      <a class={props.class} href={props.href} target="_blank" rel="noreferrer noopener">
        {props.children ?? props.href}
      </a>
    </Show>
  );
};

export default SafeLink;
