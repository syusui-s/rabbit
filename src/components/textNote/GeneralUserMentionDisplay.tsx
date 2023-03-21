import { Show } from 'solid-js';

import useProfile from '@/nostr/useProfile';
import npubEncodeFallback from '@/utils/npubEncodeFallback';

export type GeneralUserMentionDisplayProps = {
  pubkey: string;
};

const GeneralUserMentionDisplay = (props: GeneralUserMentionDisplayProps) => {
  const { profile } = useProfile(() => ({
    pubkey: props.pubkey,
  }));

  return (
    <Show
      when={(profile()?.name?.length ?? 0) > 0}
      fallback={`@${npubEncodeFallback(props.pubkey)}`}
    >
      @{profile()?.name ?? props.pubkey}
    </Show>
  );
};

export default GeneralUserMentionDisplay;
