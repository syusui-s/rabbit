import type { MentionedUser } from '@/core/parseTextNote';
import useProfile from '@/nostr/useProfile';
import useConfig from '@/nostr/useConfig';
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
    <Show when={(profile()?.name?.length ?? 0) > 0} fallback={`@${props.pubkey}`}>
      @{profile()?.name ?? props.pubkey}
    </Show>
  );
};

export default GeneralUserMentionDisplay;
