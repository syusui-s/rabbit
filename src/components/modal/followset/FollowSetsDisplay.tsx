import { type Component, For, Show } from 'solid-js';

import { useTranslation } from '@/i18n/useTranslation';
import NostrSet from '@/nostr/event/sets/NostrSet';
import useFollowSets from '@/nostr/useFollowSets';
import ensureNonNull from '@/utils/ensureNonNull';

type FollowSetsDisplayProps = {
  pubkey?: string;
  onSelectFollowSet: (pubkey: string, identifier: string) => void;
};

const FollowSetsDisplay: Component<FollowSetsDisplayProps> = (props) => {
  const i18n = useTranslation();

  const { followSets } = useFollowSets(() =>
    ensureNonNull([props.pubkey] as const)(([pubkeyNonNull]) => ({
      author: pubkeyNonNull,
    })),
  );

  return (
    <div class="p-8">
      {i18n.t('column.addFollowSetColumn.numberOfFollowSets', { count: followSets().length })}
      <div class="flex flex-col divide-y divide-border rounded-sm border border-border">
        <For each={followSets()}>
          {(followSet) => {
            const event = new NostrSet(followSet);

            return (
              <button
                type="button"
                class="flex items-center gap-2 p-2 hover:bg-bg-tertiary"
                onClick={() => props.onSelectFollowSet(event.pubkey, event.identifier())}
              >
                <div class="size-8 shrink-0 bg-fg-secondary">
                  <Show when={event.image()} keyed>
                    {(url) => <img class="size-full object-cover" src={url} alt="icon" />}
                  </Show>
                </div>
                <div class="shrink-0 grow truncate text-start">
                  {event.title() ?? event.identifier()}
                </div>
                <div class="px-2 text-fg-secondary">{event.pTags().length}</div>
              </button>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default FollowSetsDisplay;
