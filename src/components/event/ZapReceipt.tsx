import { Component, Show, createMemo } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools';

import GeneralUserMentionDisplay from '@/components/event/textNote/GeneralUserMentionDisplay';
import UserNameDisplay from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import { genericEvent } from '@/nostr/event';

export type ZapReceiptProps = {
  event: NostrEvent;
};

const ZapReceipt: Component<ZapReceiptProps> = (props) => {
  const { shouldMuteEvent } = useConfig();

  const event = createMemo(() => genericEvent(props.event));

  const zapRequest = () => {
    const description = event().findFirstTagByName('description');
    if (description == null) return null;

    try {
      // TODO verify that this is event
      return JSON.parse(description[1]) as NostrEvent;
    } catch (err) {
      console.error('failed to parse zap receipt', description);
      return null;
    }
  };

  const amount = () => {
    return event().findFirstTagByName('amount');
  };

  return (
    <Show when={!shouldMuteEvent(props.event)}>
      ⚡
      <UserNameDisplay pubkey={zapRequest().pubkey} />
      <pre>{JSON.stringify(props.event, null, 2)}</pre>
    </Show>
  );
};

export default ZapReceipt;
