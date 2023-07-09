import { Show, Switch, Match, Component } from 'solid-js';

import About from '@/components/modal/About';
import AddColumn from '@/components/modal/AddColumn';
import ProfileDisplay from '@/components/modal/ProfileDisplay';
import ProfileEdit from '@/components/modal/ProfileEdit';
import useModalState from '@/hooks/useModalState';
import usePubkey from '@/nostr/usePubkey';
import ensureNonNull from '@/utils/ensureNonNull';

const GlobalModal: Component = () => {
  const pubkey = usePubkey();
  const { modalState, showProfile, closeModal } = useModalState();

  return (
    <Show when={modalState()} keyed>
      {(state) => (
        <Switch>
          <Match when={state.type === 'Profile' && state.pubkey} keyed>
            {(pubkeyNonNull: string) => (
              <ProfileDisplay pubkey={pubkeyNonNull} onClose={closeModal} />
            )}
          </Match>
          <Match when={state.type === 'ProfileEdit'} keyed>
            <ProfileEdit
              onClose={() =>
                ensureNonNull([pubkey()])(([pubkeyNonNull]) => {
                  showProfile(pubkeyNonNull);
                })
              }
            />
          </Match>
          <Match when={state.type === 'AddColumn'}>
            <AddColumn onClose={closeModal} />
          </Match>
          <Match when={state.type === 'About'}>
            <About onClose={closeModal} />
          </Match>
        </Switch>
      )}
    </Show>
  );
};

export default GlobalModal;
