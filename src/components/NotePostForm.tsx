import {
  createSignal,
  createMemo,
  onMount,
  Show,
  For,
  type Component,
  type JSX,
  type Accessor,
} from 'solid-js';
import { createMutation } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';
import uniq from 'lodash/uniq';

import PaperAirplane from 'heroicons/24/solid/paper-airplane.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import UserNameDisplay from '@/components/UserDisplayName';

import eventWrapper from '@/core/event';

import useConfig from '@/nostr/useConfig';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';

type NotePostFormProps = {
  replyTo?: NostrEvent;
  mode?: 'normal' | 'reply';
  onClose: () => void;
};

const placeholder = (mode: NotePostFormProps['mode']) => {
  switch (mode) {
    case 'normal':
      return 'いまどうしてる？';
    case 'reply':
      return '返信を投稿';
    default:
      return 'いまどうしてる？';
  }
};

const NotePostForm: Component<NotePostFormProps> = (props) => {
  let textAreaRef: HTMLTextAreaElement | undefined;

  const [text, setText] = createSignal<string>('');
  const clearText = () => setText('');

  const { config } = useConfig();
  const getPubkey = usePubkey();
  const commands = useCommands();

  const replyTo = () => props.replyTo && eventWrapper(props.replyTo);
  const mode = () => props.mode ?? 'normal';

  const publishTextNoteMutation = createMutation({
    mutationKey: ['publishTextNote'],
    mutationFn: commands.publishTextNote.bind(commands),
    onSuccess: () => {
      console.log('succeeded to post');
      clearText();
      props?.onClose();
    },
    onError: (err) => {
      console.error('error', err);
    },
  });

  const mentionedPubkeys: Accessor<string[]> = createMemo(
    () => replyTo()?.mentionedPubkeysWithoutAuthor() ?? [],
  );
  const notifyPubkeys = (pubkey: string): string[] | undefined => {
    if (props.replyTo === undefined) return undefined;
    return uniq([props.replyTo.pubkey, ...mentionedPubkeys(), pubkey]);
  };

  const submit = () => {
    const pubkey = getPubkey();
    if (pubkey == null) {
      console.error('pubkey is not available');
      return;
    }
    publishTextNoteMutation.mutate({
      relayUrls: config().relayUrls,
      pubkey,
      content: text(),
      notifyPubkeys: notifyPubkeys(pubkey),
      rootEventId: replyTo()?.rootEvent()?.id ?? replyTo()?.id,
      replyEventId: replyTo()?.id,
    });
  };

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    submit();
  };

  const handleKeyDown: JSX.EventHandlerUnion<HTMLTextAreaElement, KeyboardEvent> = (ev) => {
    if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) {
      submit();
    } else if (ev.key === 'Escape') {
      props.onClose();
    }
  };

  const submitDisabled = createMemo(
    () => text().trim().length === 0 || publishTextNoteMutation.isLoading,
  );

  onMount(() => {
    setTimeout(() => {
      textAreaRef?.focus();
    }, 50);
  });

  return (
    <div class="p-1">
      <Show when={mentionedPubkeys().length > 0}>
        <div>
          <For each={mentionedPubkeys()}>
            {(pubkey) => (
              <>
                <UserNameDisplay pubkey={pubkey} />{' '}
              </>
            )}
          </For>
          に返信
        </div>
      </Show>
      <form class="flex flex-col gap-1" onSubmit={handleSubmit}>
        <textarea
          ref={textAreaRef}
          name="text"
          class="rounded border-none"
          rows={4}
          placeholder={placeholder(mode())}
          onInput={(ev) => setText(ev.currentTarget.value)}
          onKeyDown={handleKeyDown}
          value={text()}
        />
        <div class="flex items-end justify-end">
          <Show when={mode() === 'reply'}>
            <div class="flex-1">
              <button class="h-5 w-5 text-stone-500" onClick={() => props.onClose()}>
                <XMark />
              </button>
            </div>
          </Show>
          <button
            class="rounded bg-primary p-2 font-bold text-white"
            classList={{
              'bg-primary-disabled': submitDisabled(),
              'bg-primary': !submitDisabled(),
              'h-8': mode() === 'normal',
              'w-8': mode() === 'normal',
              'h-7': mode() === 'reply',
              'w-7': mode() === 'reply',
            }}
            type="submit"
            disabled={submitDisabled()}
          >
            <PaperAirplane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotePostForm;
