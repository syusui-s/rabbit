import type { MentionedUser } from '@/core/parseTextNote';
import GeneralUserMentionDisplay from '@/components/textNote/GeneralUserMentionDisplay';

export type MentionedUserDisplayProps = {
  mentionedUser: MentionedUser;
};

const MentionedUserDisplay = (props: MentionedUserDisplayProps) => {
  return (
    <span class="text-blue-500 underline">
      <GeneralUserMentionDisplay pubkey={props.mentionedUser.pubkey} />
    </span>
  );
};

export default MentionedUserDisplay;
