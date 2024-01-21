import { createEffect, onMount } from 'solid-js';

import { useNavigate, useParams } from '@solidjs/router';
import { decode } from 'nostr-tools/nip19';

import GlobalModal from '@/components/modal/GlobalModal';
import SideBar from '@/components/SideBar';
import useModalState from '@/hooks/useModalState';

const Permalink = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { modalState, showProfile } = useModalState();

  const navigateTop = () => navigate('/');

  onMount(() => {
    if (params.id != null) {
      try {
        const decoded = decode(params.id);
        if (decoded.type === 'npub') {
          showProfile(decoded.data);
        }
      } catch (err) {
        window.alert('Invalid ID');
        navigateTop();
      }
    } else {
      navigateTop();
    }
  });

  createEffect(() => {
    if (modalState().type === 'Closed') {
      navigateTop();
    }
  });

  return (
    <div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">
      <SideBar />
      <GlobalModal />
    </div>
  );
};

export default Permalink;
