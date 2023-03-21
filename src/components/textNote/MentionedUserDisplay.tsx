import type { MentionedUser } from '@/core/parseTextNote';
import GeneralUserMentionDisplay from '@/components/textNote/GeneralUserMentionDisplay';
import useModalState from '@/hooks/useModalState';

export type MentionedUserDisplayProps = {
  mentionedUser: MentionedUser;
};

const MentionedUserDisplay = (props: MentionedUserDisplayProps) => {
  const { showProfile } = useModalState();

  const handleClick = () => {
    showProfile(props.mentionedUser.pubkey);
  };
  return (
    <button class="inline text-blue-500 underline" onClick={handleClick}>
      <GeneralUserMentionDisplay pubkey={props.mentionedUser.pubkey} />
    </button>
  );
};

export default MentionedUserDisplay;
