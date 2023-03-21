import { createSignal, type Signal } from 'solid-js';

type ModalState =
  | { type: 'Profile'; pubkey: string }
  | { type: 'UserTimeline'; pubkey: string }
  | { type: 'Closed' };

const [modalState, setModalState] = createSignal<ModalState>({ type: 'Closed' });

const useModalState = () => {
  const showProfile = (pubkey: string) => {
    setModalState({ type: 'Profile', pubkey });
  };
  const closeModal = () => {
    setModalState({ type: 'Closed' });
  };
  return { modalState, setModalState, showProfile, closeModal };
};

export default useModalState;
