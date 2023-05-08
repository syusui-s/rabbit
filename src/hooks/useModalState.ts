import { createSignal } from 'solid-js';

type ModalState =
  | { type: 'Profile'; pubkey: string }
  | { type: 'ProfileEdit' }
  | { type: 'UserTimeline'; pubkey: string }
  | { type: 'AddColumn' }
  | { type: 'About' }
  | { type: 'Closed' };

const [modalState, setModalState] = createSignal<ModalState>({ type: 'Closed' });

const useModalState = () => {
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
    showProfile,
    showProfileEdit,
    showAddColumn,
    showAbout,
    closeModal,
  };
};

export default useModalState;
