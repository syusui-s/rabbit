import { createMemo, Show, For } from 'solid-js';
import type { Component } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools/event';
import useProfile from '@/clients/useProfile';
import useConfig from '@/clients/useConfig';
import TextNoteContentDisplay from '@/components/textNote/TextNoteContentDisplay';
import ColumnItem from '@/components/ColumnItem';
import GeneralUserMentionDisplay from './textNote/GeneralUserMentionDisplay';

export type TextNoteProps = {
  event: NostrEvent;
};

const TextNote: Component<TextNoteProps> = (props) => {
  const [config] = useConfig();
  const { profile: author } = useProfile(() => ({
    relayUrls: config().relayUrls,
    pubkey: props.event.pubkey,
  }));
  const replyingToPubKeys = createMemo(() =>
    props.event.tags.filter((tag) => tag[0] === 'p').map((e) => e[1]),
  );
  // TODO 日付をいい感じにフォーマットする関数を作る
  const createdAt = () => new Date(props.event.created_at * 1000).toLocaleTimeString();

  return (
    <div class="textnote">
      <ColumnItem>
        <div class="author-icon max-w-10 max-h-10 shrink-0">
          <Show when={author()?.picture} fallback={<div class="h-10 w-10" />}>
            <img
              src={author()?.picture}
              alt="icon"
              // TODO autofit
              class="h-10 w-10 rounded"
            />
          </Show>
        </div>
        <div class="min-w-0 flex-auto">
          <div class="flex justify-between gap-1 text-xs">
            <div class="author flex min-w-0 truncate">
              {/* TODO link to author */}
              <Show when={author()?.display_name}>
                <div class="author-name pr-1 font-bold">{author()?.display_name}</div>
              </Show>
              <div class="author-username truncate">
                <Show when={author()?.name} fallback={props.event.pubkey}>
                  @{author()?.name}
                </Show>
              </div>
            </div>
            <div class="created-at shrink-0">{createdAt()}</div>
          </div>
          <Show when={replyingToPubKeys().length > 0}>
            <div class="text-xs">
              {'Replying to '}
              <For each={replyingToPubKeys()}>
                {(pubkey: string) => (
                  <span class="pr-1 text-blue-500 underline">
                    <GeneralUserMentionDisplay pubkey={pubkey} />
                  </span>
                )}
              </For>
            </div>
          </Show>
          <div class="content whitespace-pre-wrap break-all">
            <TextNoteContentDisplay event={props.event} />
          </div>
        </div>
      </ColumnItem>
    </div>
  );
};

export default TextNote;
