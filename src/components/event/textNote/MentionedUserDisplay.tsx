import GeneralUserMentionDisplay from '@/components/event/textNote/GeneralUserMentionDisplay';
import useModalState from '@/hooks/useModalState';

import type { MentionedUser } from '@/nostr/parseTextNote';

export type MentionedUserDisplayProps = {
  pubkey: string;
};

const MentionedUserDisplay = (props: MentionedUserDisplayProps) => {
  const { showProfile } = useModalState();

  const handleClick = () => {
    showProfile(props.pubkey);
  };
  return (
    <button class="inline text-blue-500 underline" onClick={handleClick}>
      <GeneralUserMentionDisplay pubkey={props.pubkey} />
    </button>
  );
};

export default MentionedUserDisplay;
