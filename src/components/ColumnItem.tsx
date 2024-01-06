import { type Component, type JSX } from 'solid-js';

type ColumnItemProps = {
  children: JSX.Element;
};

const ColumnItem: Component<ColumnItemProps> = (props) => (
  <div class="block shrink-0 overflow-hidden border-b border-border p-1">{props.children}</div>
);

export default ColumnItem;
