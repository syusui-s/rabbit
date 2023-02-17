import type { Component } from 'solid-js';

type ColumnProps = {
  width: 'wide' | 'medium' | 'narrow' | null | undefined;
  children: JSX.Element;
};

const widthToClass = {
  widest: 'w-[500px]',
  wide: 'w-[350px]',
  medium: 'w-[310px]',
  narrow: 'w-[270px]',
} as const;

const Column: Component<ColumnProps> = (props) => {
  const width = () => {
    if (props.width == null) {
      return widthToClass.medium;
    }
    return widthToClass[props.width];
  };

  return (
    <div class={`h-full shrink-0 border-r ${width()}`}>
      <div class="flex h-8 items-center border-b bg-white px-2">
        <span class="column-icon">🏠</span>
        <span class="column-name">Home</span>
      </div>
      <div class="h-full overflow-y-scroll pb-8">{props.children}</div>
    </div>
  );
};

export default Column;
