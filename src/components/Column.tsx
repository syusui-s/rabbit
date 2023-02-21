import type { Component, JSX } from 'solid-js';

const widthToClass = {
  widest: 'w-[500px]',
  wide: 'w-[350px]',
  medium: 'w-[310px]',
  narrow: 'w-[270px]',
} as const;

type ColumnProps = {
  name: string;
  width: keyof typeof widthToClass | null | undefined;
  children: JSX.Element;
};

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
        {/* <span class="column-icon">🏠</span> */}
        <span class="column-name">{props.name}</span>
      </div>
      <div class="h-full overflow-y-scroll pb-8">{props.children}</div>
    </div>
  );
};

export default Column;
