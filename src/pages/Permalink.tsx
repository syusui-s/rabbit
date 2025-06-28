import { createEffect, onMount } from 'solid-js';

import { useNavigate, useParams } from '@solidjs/router';
import { decode } from 'nostr-tools/nip19';

import GlobalModal from '@/components/modal/GlobalModal';
import SideBar from '@/components/SideBar';
import useModalState from '@/hooks/useModalState';

const isProfile = (s: string): boolean => /^(npub|nprofile)1[ac-hj-np-z02-9]+$/.test(s);

const Permalink = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { modalState, showProfile } = useModalState();

  const navigateTop = () => navigate('/');

  onMount(() => {
    if (params.id != null) {
      if (isProfile(params.id)) {
        try {
          const decoded = decode(params.id);
          if (decoded.type === 'npub') {
            showProfile(decoded.data);
          } else if (decoded.type === 'nprofile') {
            // TODO support relay URLs
            showProfile(decoded.data.pubkey);
          }
        } catch (err) {
          console.error('Failed to decode NIP-19', err);
          window.alert('Invalid ID');
          navigateTop();
        }
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
