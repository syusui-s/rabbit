import type { MentionedUser } from '@/core/parseTextNote';
import GeneralUserMentionDisplay from '@/components/textNote/GeneralUserMentionDisplay';
import useModalState from '@/hooks/useModalState';

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
