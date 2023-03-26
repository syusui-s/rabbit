import { Switch, Match, type Component } from 'solid-js';

import useConfig from '@/nostr/useConfig';

import { type ColumnContent } from '@/components/ColumnContext';
import Timeline from '@/components/Timeline';
import useSubscription from '@/nostr/useSubscription';

const RepliesDisplay: Component<{ eventId: string }> = (props) => {
  const { config } = useConfig();

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      { kinds: [1], ids: [props.eventId], limit: 25 },
      { kinds: [1], '#e': [props.eventId], limit: 25 },
    ],
  }));

  return <Timeline events={[...events()].reverse()} />;
};

const ColumnContentDisplay: Component<{ columnContent: ColumnContent }> = (props) => {
  return (
    <Switch>
      <Match when={props.columnContent.type === 'Replies' && props.columnContent} keyed>
        {(replies) => <RepliesDisplay eventId={replies.eventId} />}
      </Match>
    </Switch>
  );
};

export default ColumnContentDisplay;
