import GeneralUserMentionDisplay from '@/components/event/textNote/GeneralUserMentionDisplay';
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
    <button class="inline text-link underline select-text" onClick={handleClick}>
      <GeneralUserMentionDisplay pubkey={props.pubkey} />
    </button>
  );
};

export default MentionedUserDisplay;
