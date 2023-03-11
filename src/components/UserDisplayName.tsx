import { Component, Switch, Match } from 'solid-js';

import useConfig from '@/nostr/useConfig';
import useProfile from '@/nostr/useProfile';

type UserNameDisplayProps = {
  pubkey: string;
};

const UserNameDisplay: Component<UserNameDisplayProps> = (props) => {
  const { config } = useConfig();
  const { profile } = useProfile(() => ({
    relayUrls: config().relayUrls,
    pubkey: props.pubkey,
  }));

  return (
    <Switch fallback={`@${props.pubkey}`}>
      <Match when={(profile()?.display_name?.length ?? 0) > 0}>{profile()?.display_name}</Match>
      <Match when={(profile()?.name?.length ?? 0) > 0}>@{profile()?.name}</Match>
    </Switch>
  );
};

export default UserNameDisplay;
