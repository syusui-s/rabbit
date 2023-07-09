import { createSignal } from 'solid-js';

type ModalState =
  | { type: 'Login' }
  | { type: 'Profile'; pubkey: string }
  | { type: 'ProfileEdit' }
  | { type: 'UserTimeline'; pubkey: string }
  | { type: 'AddColumn' }
  | { type: 'About' }
  | { type: 'Closed' };

const [modalState, setModalState] = createSignal<ModalState>({ type: 'Closed' });

const useModalState = () => {
  const showLogin = () => {
    setModalState({ type: 'Login' });
  };
  const showProfile = (pubkey: string) => {
    setModalState({ type: 'Profile', pubkey });
  };
  const showProfileEdit = () => {
    setModalState({ type: 'ProfileEdit' });
  };
  const showAddColumn = () => {
    setModalState({ type: 'AddColumn' });
  };
  const showAbout = () => {
    setModalState({ type: 'About' });
  };
  const closeModal = () => {
    setModalState({ type: 'Closed' });
  };
  return {
    modalState,
    setModalState,
    showLogin,
    showProfile,
    showProfileEdit,
    showAddColumn,
    showAbout,
    closeModal,
  };
};

export default useModalState;
