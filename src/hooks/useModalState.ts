import { createSignal } from 'solid-js';

type ModalState =
  | { type: 'Profile'; pubkey: string }
  | { type: 'ProfileEdit' }
  | { type: 'UserTimeline'; pubkey: string }
  | { type: 'Closed' };

const [modalState, setModalState] = createSignal<ModalState>({ type: 'Closed' });

const useModalState = () => {
  const showProfile = (pubkey: string) => {
    setModalState({ type: 'Profile', pubkey });
  };
  const showProfileEdit = () => {
    setModalState({ type: 'ProfileEdit' });
  };
  const closeModal = () => {
    setModalState({ type: 'Closed' });
  };
  return { modalState, setModalState, showProfile, showProfileEdit, closeModal };
};

export default useModalState;
