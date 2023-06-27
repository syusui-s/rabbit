import { For, JSX, Show } from 'solid-js';

import ProfileListItem from '@/components/event/ProfileListItem';
import BasicModal from '@/components/modal/BasicModal';
import useModalState from '@/hooks/useModalState';

export type UserListProps<T> = {
  data: T[];
  pubkeyExtractor: (e: T) => string;
  renderInfo?: (e: T) => JSX.Element;
  onClose: () => void;
};

const UserList = <T,>(props: UserListProps<T>): JSX.Element => {
  const { showProfile } = useModalState();

  return (
    <BasicModal onClose={props.onClose}>
      <div class="px-4 py-2">
        <div>{props.data.length} 件</div>
        <div>
          <For each={props.data}>
            {(e) => {
              const pubkey = () => props.pubkeyExtractor(e);
              return (
                <div class="flex border-t py-1">
                  <Show when={props.renderInfo} keyed>
                    {(render) => render(e)}
                  </Show>
                  <ProfileListItem pubkey={pubkey()} onShowProfile={() => showProfile(pubkey())} />
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </BasicModal>
  );
};

export default UserList;
