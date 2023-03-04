import { type Component, type JSX } from 'solid-js';

type ColumnItemProps = {
  children: JSX.Element;
};

const ColumnItem: Component<ColumnItemProps> = (props) => {
  return <div class="overflow-hidden border-b p-1">{props.children}</div>;
};

export default ColumnItem;
