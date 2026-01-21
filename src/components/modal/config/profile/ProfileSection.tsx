import Section from '@/components/modal/config/Section';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import usePubkey from '@/nostr/usePubkey';
import ensureNonNull from '@/utils/ensureNonNull';

const ProfileSection = () => {
  const i18n = useTranslation();
  const pubkey = usePubkey();
  const { showProfile, showProfileEdit } = useModalState();

  return (
    <Section title={i18n.t('config.account.profile')}>
      <div class="flex gap-2 py-1">
        <button
          class="rounded-sm border border-primary px-4 py-1 font-bold text-primary"
          onClick={() =>
            ensureNonNull([pubkey()])(([pubkeyNonNull]) => {
              showProfile(pubkeyNonNull);
            })
          }
        >
          {i18n.t('config.account.openProfile')}
        </button>
        <button
          class="rounded-sm border border-primary px-4 py-1 font-bold text-primary"
          onClick={() => showProfileEdit()}
        >
          {i18n.t('config.account.editProfile')}
        </button>
      </div>
    </Section>
  );
};

export default ProfileSection;
