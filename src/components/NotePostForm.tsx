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
import Photo from 'heroicons/24/outline/photo.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import UserNameDisplay from '@/components/UserDisplayName';

import eventWrapper from '@/core/event';

import useConfig from '@/nostr/useConfig';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import { useHandleCommand } from '@/hooks/useCommandBus';

import { uploadNostrBuild, uploadFiles } from '@/utils/imageUpload';

type NotePostFormProps = {
  replyTo?: NostrEvent;
  mode?: 'normal' | 'reply';
  onClose: () => void;
  onPost?: () => void;
  textAreaRef?: (textAreaRef: HTMLTextAreaElement) => void;
};

const placeholder = (mode: NotePostFormProps['mode']) => {
  switch (mode) {
    case 'reply':
      return '返信を投稿';
    case 'normal':
    default:
      return 'いまどうしてる？';
  }
};

const NotePostForm: Component<NotePostFormProps> = (props) => {
  let textAreaRef: HTMLTextAreaElement | undefined;
  let fileInputRef: HTMLInputElement | undefined;

  const [text, setText] = createSignal<string>('');
  const [contentWarning, setContentWarning] = createSignal(false);
  const [contentWarningReason, setContentWarningReason] = createSignal('');

  const clearText = () => {
    setText('');
    setContentWarningReason('');
    setContentWarning(false);
  };

  const close = () => {
    textAreaRef?.blur();
    clearText();
    props.onClose();
  };

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
      props.onPost?.();
    },
    onError: (err) => {
      console.error('error', err);
    },
  });

  const resizeTextArea = () => {
    if (textAreaRef == null) return;
    textAreaRef.style.height = 'auto';
    textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;
  };

  const uploadFilesMutation = createMutation({
    mutationKey: ['uploadFiles'],
    mutationFn: (files: File[]) => {
      return uploadFiles(uploadNostrBuild)(files)
        .then((uploadResults) => {
          uploadResults.forEach((result) => {
            if (result.status === 'fulfilled') {
              console.log('succeeded to upload', result);
              setText((current) => `${current} ${result.value.imageUrl}`);
              resizeTextArea();
            } else {
              console.error('failed to upload', result);
            }
          });
        })
        .catch((err) => console.error(err));
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
    if (text().length === 0) return;
    if (publishTextNoteMutation.isLoading) return;

    const pubkey = getPubkey();
    if (pubkey == null) {
      console.error('pubkey is not available');
      return;
    }
    let textNote: Parameters<typeof commands.publishTextNote>[0] = {
      relayUrls: config().relayUrls,
      pubkey,
      content: text(),
    };
    if (replyTo() != null) {
      textNote = {
        ...textNote,
        notifyPubkeys: notifyPubkeys(pubkey),
        rootEventId: replyTo()?.rootEvent()?.id ?? replyTo()?.id,
        replyEventId: replyTo()?.id,
      };
    }
    if (contentWarning()) {
      textNote = {
        ...textNote,
        contentWarning: contentWarningReason(),
      };
    }
    publishTextNoteMutation.mutate(textNote);
  };

  const handleInput: JSX.EventHandler<HTMLTextAreaElement, InputEvent> = (ev) => {
    setText(ev.currentTarget.value);
    resizeTextArea();
  };

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    submit();
  };

  const handleKeyDown: JSX.EventHandlerUnion<HTMLTextAreaElement, KeyboardEvent> = (ev) => {
    if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) {
      submit();
    } else if (ev.key === 'Escape') {
      textAreaRef?.blur();
      close();
    }
  };

  const handleChangeFile: JSX.EventHandler<HTMLInputElement, Event> = (ev) => {
    ev.preventDefault();
    const files = [...(ev.currentTarget.files ?? [])];
    uploadFilesMutation.mutate(files);
    // eslint-disable-next-line no-param-reassign
    ev.currentTarget.value = '';
  };

  const handleDrop: JSX.EventHandler<HTMLTextAreaElement, DragEvent> = (ev) => {
    ev.preventDefault();
    if (uploadFilesMutation.isLoading) return;
    const files = [...(ev?.dataTransfer?.files ?? [])];
    uploadFilesMutation.mutate(files);
  };

  const handlePaste: JSX.EventHandler<HTMLTextAreaElement, ClipboardEvent> = (ev) => {
    if (uploadFilesMutation.isLoading) return;
    const items = [...(ev?.clipboardData?.items ?? [])];

    const files: File[] = [];
    items.forEach((item) => {
      if (item.kind === 'file') {
        ev.preventDefault();
        const file = item.getAsFile();
        if (file == null) return;
        files.push(file);
      }
    });
    if (files.length === 0) return;
    uploadFilesMutation.mutate(files);
  };

  const handleDragOver: JSX.EventHandler<HTMLTextAreaElement, DragEvent> = (ev) => {
    ev.preventDefault();
  };

  const submitDisabled = () =>
    text().trim().length === 0 ||
    publishTextNoteMutation.isLoading ||
    uploadFilesMutation.isLoading;

  const fileUploadDisabled = () => uploadFilesMutation.isLoading;

  onMount(() => {
    setTimeout(() => {
      textAreaRef?.click();
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
        <Show when={contentWarning()}>
          <input
            type="text"
            class="rounded"
            placeholder="警告の理由"
            maxLength={32}
            onInput={(ev) => setContentWarningReason(ev.currentTarget.value)}
            value={contentWarningReason()}
          />
        </Show>
        <textarea
          ref={(el) => {
            textAreaRef = el;
            props.textAreaRef?.(el);
          }}
          name="text"
          class="min-h-[40px] rounded border-none"
          rows={4}
          placeholder={placeholder(mode())}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onPaste={handlePaste}
          value={text()}
        />
        <div class="flex items-end justify-end gap-1">
          <Show when={mode() === 'reply'}>
            <div class="flex-1">
              <button class="h-5 w-5 text-stone-500" onClick={() => close()}>
                <XMark />
              </button>
            </div>
          </Show>
          <button
            class="flex items-center justify-center rounded p-2 text-xs font-bold text-white"
            classList={{
              'bg-rose-300': !contentWarning(),
              'bg-rose-400': contentWarning(),
              'h-8': mode() === 'normal',
              'w-8': mode() === 'normal',
              'h-7': mode() === 'reply',
              'w-7': mode() === 'reply',
            }}
            type="button"
            aria-label="コンテンツ警告を設定"
            title="コンテンツ警告を設定"
            onClick={() => setContentWarning((e) => !e)}
          >
            <span>CW</span>
          </button>
          <button
            class="rounded bg-primary p-2 font-bold text-white"
            classList={{
              'bg-primary-disabled': fileUploadDisabled(),
              'bg-primary': !fileUploadDisabled(),
              'h-8': mode() === 'normal',
              'w-8': mode() === 'normal',
              'h-7': mode() === 'reply',
              'w-7': mode() === 'reply',
            }}
            type="button"
            title="画像を投稿"
            aria-label="画像を投稿"
            disabled={fileUploadDisabled()}
            onClick={() => fileInputRef?.click()}
          >
            <Photo />
          </button>
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
            aria-label="投稿"
            title="投稿"
            disabled={submitDisabled()}
          >
            <PaperAirplane />
          </button>
        </div>
        <input
          ref={fileInputRef}
          class="rounded bg-primary"
          type="file"
          hidden
          name="image"
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleChangeFile}
        />
      </form>
    </div>
  );
};

export default NotePostForm;
