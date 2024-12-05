import { type JSX } from 'solid-js';

const ToggleButton = (props: {
  value: boolean;
  onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>;
}) => (
  <button
    class="flex h-[24px] w-[48px] items-center rounded-full border border-primary/80 px-1"
    classList={{
      'bg-bg-tertiary': !props.value,
      'justify-start': !props.value,
      'bg-primary': props.value,
      'justify-end': props.value,
    }}
    area-label={props.value}
    onClick={(event) => props.onClick(event)}
  >
    <span class="m-[-3px] inline-block size-5 rounded-full border bg-primary-fg shadow" />
  </button>
);

export default ToggleButton;
