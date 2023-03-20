import { Show } from 'solid-js';
import { npubEncode } from 'nostr-tools/nip19';

import useProfile from '@/nostr/useProfile';

export type GeneralUserMentionDisplayProps = {
  pubkey: string;
};

const GeneralUserMentionDisplay = (props: GeneralUserMentionDisplayProps) => {
  const { profile } = useProfile(() => ({
    pubkey: props.pubkey,
  }));

  return (
    <Show when={(profile()?.name?.length ?? 0) > 0} fallback={`@${npubEncode(props.pubkey)}`}>
      @{profile()?.name ?? props.pubkey}
    </Show>
  );
};

export default GeneralUserMentionDisplay;
