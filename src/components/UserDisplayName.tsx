import { Component, Switch, Match } from 'solid-js';

import useProfile from '@/nostr/useProfile';
import npubEncodeFallback from '@/utils/npubEncodeFallback';

type UserNameDisplayProps = {
  pubkey: string;
};

const UserNameDisplay: Component<UserNameDisplayProps> = (props) => {
  const { profile } = useProfile(() => ({
    pubkey: props.pubkey,
  }));

  return (
    <Switch fallback={npubEncodeFallback(props.pubkey)}>
      <Match when={(profile()?.display_name?.length ?? 0) > 0}>{profile()?.display_name}</Match>
      <Match when={(profile()?.name?.length ?? 0) > 0}>@{profile()?.name}</Match>
    </Switch>
  );
};

export default UserNameDisplay;
