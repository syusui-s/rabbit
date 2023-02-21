import type { MentionedUser } from '@/core/parseTextNote';
import useProfile from '@/clients/useProfile';
import useConfig from '@/clients/useConfig';
import { Show } from 'solid-js';

export type GeneralUserMentionDisplayProps = {
  pubkey: string;
};

const GeneralUserMentionDisplay = (props: GeneralUserMentionDisplayProps) => {
  const [config] = useConfig();
  const { profile } = useProfile(() => ({
    relayUrls: config().relayUrls,
    pubkey: props.pubkey,
  }));

  return (
    <Show when={profile() != null} fallback={`@${props.pubkey}`}>
      @{profile()?.display_name ?? props.pubkey}
    </Show>
  );
};

export default GeneralUserMentionDisplay;
