import { Show } from 'solid-js';
import { npubEncode } from 'nostr-tools/nip19';

import useProfile from '@/nostr/useProfile';
import useConfig from '@/nostr/useConfig';

export type GeneralUserMentionDisplayProps = {
  pubkey: string;
};

const GeneralUserMentionDisplay = (props: GeneralUserMentionDisplayProps) => {
  const { config } = useConfig();
  const { profile } = useProfile(() => ({
    relayUrls: config().relayUrls,
    pubkey: props.pubkey,
  }));

  return (
    <Show when={(profile()?.name?.length ?? 0) > 0} fallback={`@${npubEncode(props.pubkey)}`}>
      @{profile()?.name ?? props.pubkey}
    </Show>
  );
};

export default GeneralUserMentionDisplay;
