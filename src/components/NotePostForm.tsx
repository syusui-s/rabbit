import { createSignal, createMemo, onMount, Show, For, type Component, type JSX } from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import FaceSmile from 'heroicons/24/outline/face-smile.svg';
import Photo from 'heroicons/24/outline/photo.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';
import PaperAirplane from 'heroicons/24/solid/paper-airplane.svg';
import uniq from 'lodash/uniq';
import { Event as NostrEvent } from 'nostr-tools/pure';

import EmojiPicker, { EmojiData } from '@/components/EmojiPicker';
import UserNameDisplay from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import useEmojiComplete from '@/hooks/useEmojiComplete';
import { useTranslation } from '@/i18n/useTranslation';
import { textNote } from '@/nostr/event';
import parseTextNote, { ParsedTextNote } from '@/nostr/parseTextNote';
import useCommands, { PublishTextNoteParams } from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import { uploadFiles, uploadNostrBuild } from '@/utils/imageUpload';
// import usePersistStatus from '@/hooks/usePersistStatus';

type NotePostFormProps = {
  replyTo?: NostrEvent;
  mode?: 'normal' | 'reply';
  onClose: () => void;
  onPost?: () => void;
  textAreaRef?: (textAreaRef: HTMLTextAreaElement) => void;
};

const extract = (parsed: ParsedTextNote) => {
  const hashtags: string[] = [];
  const pubkeyReferences: string[] = [];
  const eventReferences: string[] = [];
  const urlReferences: string[] = [];
  const emojis: string[] = [];

  parsed.forEach((node) => {
    if (node.type === 'URL') {
      urlReferences.push(node.content);
    } else if (node.type === 'HashTag') {
      hashtags.push(node.tagName);
    } else if (node.type === 'Bech32Entity') {
      if (node.data.type === 'npub') {
        pubkeyReferences.push(node.data.data);
      } else if (node.data.type === 'note') {
        eventReferences.push(node.data.data);
      }
      // TODO nevent can contain an event not only textnote (kind:1).
      // In my understanding, it is not allowed to include other kinds of events in `tags`.
      // It is needed to verify that the kind of the event is 1.
    } else if (node.type === 'CustomEmoji' && !emojis.includes(node.shortcode)) {
      emojis.push(node.shortcode);
    }
  });

  return {
    hashtags,
    urlReferences,
    pubkeyReferences,
    eventReferences,
    emojis,
  };
};

const format = (parsed: ParsedTextNote) => {
  const content: string[] = [];
  parsed.forEach((node) => {
    if (node.type === 'Bech32Entity' && !node.isNIP19) {
      content.push(`nostr:${node.content}`);
    } else {
      content.push(node.content);
    }
  });
  return content.join('');
};

const NotePostForm: Component<NotePostFormProps> = (props) => {
  const i18n = useTranslation();
  let textAreaRef: HTMLTextAreaElement | undefined;
  let fileInputRef: HTMLInputElement | undefined;

  const { elementRef: emojiTextAreaRef } = useEmojiComplete();
  const [text, setText] = createSignal<string>('');
  const [contentWarning, setContentWarning] = createSignal(false);
  const [contentWarningReason, setContentWarningReason] = createSignal('');
  const [lastUsedHashTags, setLastUsedHashTags] = createSignal<string[]>([]);

  const appendText = (s: string) => setText((current) => `${current} ${s}`);

  const resetText = () => {
    setText(
      lastUsedHashTags()
        .map((e) => ` #${e}`)
        .join(''),
    );
    setContentWarningReason('');
    setContentWarning(false);
  };

  const close = () => {
    textAreaRef?.blur();
    resetText();
    props.onClose();
  };

  const placeholder = (mode: NotePostFormProps['mode']) => {
    switch (mode) {
      case 'reply':
        return i18n()('posting.placeholderReply');
      case 'normal':
      default:
        return i18n()('posting.placeholder');
    }
  };

  const { config, getEmoji } = useConfig();
  // const { persistStatus, didAgreeToToS, agreeToToS } = usePersistStatus();
  const getPubkey = usePubkey();
  const commands = useCommands();

  const replyTo = () => props.replyTo && textNote(props.replyTo);
  const mode = () => props.mode ?? 'normal';

  const publishTextNoteMutation = createMutation(() => ({
    mutationKey: ['publishTextNote'] as const,
    mutationFn: commands.publishTextNote.bind(commands),
    onSuccess: () => {
      console.log('succeeded to post');
      resetText();
      props.onPost?.();
    },
    onError: (err) => {
      console.error('error', err);
    },
  }));

  const resizeTextArea = () => {
    if (textAreaRef == null) return;
    textAreaRef.style.height = 'auto';
    textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;
  };

  const uploadFilesMutation = createMutation(() => ({
    mutationKey: ['uploadFiles'] as const,
    mutationFn: async (files: File[]) => {
      const uploadResults = await uploadFiles(uploadNostrBuild)(files);
      const failed: File[] = [];

      uploadResults.forEach((result, i) => {
        if (result.status === 'fulfilled') {
          appendText(result.value.imageUrl);
          resizeTextArea();
        } else {
          failed.push(files[i]);
        }
      });

      if (failed.length > 0) {
        const filenames = failed.map((f) => f.name).join(', ');
        window.alert(i18n()('posting.failedToUploadFile', { filenames }));
      }
    },
  }));

  const taggedPubkeysWithoutMe = createMemo(() => {
    const p = getPubkey();
    return (
      replyTo()
        ?.taggedPubkeys()
        ?.filter((pubkey) => pubkey !== p) ?? []
    );
  });

  const notifyPubkeys = createMemo(() => {
    if (props.replyTo == null) return [];
    return uniq([
      // 返信先を先頭に
      props.replyTo.pubkey,
      // その他の返信先
      ...taggedPubkeysWithoutMe(),
    ]);
  });

  const buildEmojiTags = (emojis: string[]): string[][] => {
    const emojiTags: string[][] = [];

    emojis.forEach((shortcode) => {
      const emoji = getEmoji(shortcode);
      if (emoji != null) {
        emojiTags.push(['emoji', shortcode, emoji.url]);
      }
    });

    return emojiTags;
  };

  const submit = () => {
    if (text().length === 0) return;
    if (publishTextNoteMutation.isPending) return;

    if (/nsec1[0-9a-zA-Z]+/.test(text())) {
      window.alert(i18n()('posting.forbiddenToIncludeNsec'));
      return;
    }

    const pubkey = getPubkey();
    if (pubkey == null) {
      console.error('pubkey is not available');
      return;
    }

    const parsed = parseTextNote(text());
    const { hashtags, urlReferences, pubkeyReferences, eventReferences, emojis } = extract(parsed);
    const formattedContent = format(parsed);
    const emojiTags = buildEmojiTags(emojis);

    setLastUsedHashTags(hashtags);

    let textNoteParams: PublishTextNoteParams = {
      relayUrls: config().relayUrls,
      pubkey,
      content: formattedContent,
      notifyPubkeys: pubkeyReferences,
      mentionEventIds: eventReferences,
      hashtags,
      urls: urlReferences,
      tags: emojiTags,
    };

    if (replyTo() != null) {
      textNoteParams = {
        ...textNoteParams,
        notifyPubkeys: uniq([
          ...notifyPubkeys(),
          ...pubkeyReferences, // 本文中の公開鍵（npub)
        ]),
        rootEventId: replyTo()?.rootEvent()?.id ?? replyTo()?.replyingToEvent()?.id,
        replyEventId: replyTo()?.id,
      };
    }
    if (contentWarning()) {
      textNoteParams = {
        ...textNoteParams,
        contentWarning: contentWarningReason(),
      };
    }
    publishTextNoteMutation.mutate(textNoteParams);
    close();
  };

  const handleInput: JSX.EventHandler<HTMLTextAreaElement, InputEvent> = (ev) => {
    setText(ev.currentTarget.value);
    resizeTextArea();
  };

  const handleEmojiSelect = (emoji: EmojiData) => {
    appendText(emoji.native ?? `:${emoji.id}:`);
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

  /*
    const ensureUploaderAgreement = (): boolean => true;
    if (didAgreeToToS('nostrBuild')) return true;

    window.alert(
      '画像アップローダーの利用規約をお読みください。\n（新しいタブで利用規約を開きます）',
    );
    openLink(uploaders.nostrBuild.tos);
    const didAgree = window.confirm('同意する場合はOKをクリックしてください。');

    if (didAgree) {
      agreeToToS('nostrBuild');
    }

    return didAgree;
     */
  const handleChangeFile: JSX.EventHandler<HTMLInputElement, Event> = (ev) => {
    ev.preventDefault();
    if (uploadFilesMutation.isPending) return;
    // if (!ensureUploaderAgreement()) return;

    const files = [...(ev.currentTarget.files ?? [])];
    uploadFilesMutation.mutate(files);
    // eslint-disable-next-line no-param-reassign
    ev.currentTarget.value = '';
  };

  const handleDrop: JSX.EventHandler<HTMLTextAreaElement, DragEvent> = (ev) => {
    ev.preventDefault();
    if (uploadFilesMutation.isPending) return;
    // if (!ensureUploaderAgreement()) return;
    const files = [...(ev?.dataTransfer?.files ?? [])];
    uploadFilesMutation.mutate(files);
  };

  const handlePaste: JSX.EventHandler<HTMLTextAreaElement, ClipboardEvent> = (ev) => {
    if (uploadFilesMutation.isPending) return;

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
    // if (!ensureUploaderAgreement()) return;

    uploadFilesMutation.mutate(files);
  };

  const handleDragOver: JSX.EventHandler<HTMLTextAreaElement, DragEvent> = (ev) => {
    ev.preventDefault();
  };

  const submitDisabled = () =>
    text().trim().length === 0 ||
    publishTextNoteMutation.isPending ||
    uploadFilesMutation.isPending;

  const fileUploadDisabled = () => uploadFilesMutation.isPending;

  onMount(() => {
    setTimeout(() => {
      textAreaRef?.click();
      textAreaRef?.focus();
    }, 50);
  });

  return (
    <div class="p-1">
      <Show when={props.replyTo != null}>
        <div>
          {i18n()('posting.replyToPre')}
          <For each={notifyPubkeys()}>
            {(pubkey, index) => (
              <>
                <UserNameDisplay pubkey={pubkey} />
                <Show when={index() !== notifyPubkeys().length - 1}> と </Show>
              </>
            )}
          </For>
          {i18n()('posting.replyToPost')}
        </div>
      </Show>
      <form class="flex flex-col gap-1" onSubmit={handleSubmit}>
        <Show when={contentWarning()}>
          <input
            type="text"
            class="rounded"
            placeholder={i18n()('posting.contentWarningReason')}
            maxLength={32}
            onInput={(ev) => setContentWarningReason(ev.currentTarget.value)}
            value={contentWarningReason()}
          />
        </Show>
        <textarea
          ref={(el) => {
            textAreaRef = el;
            props.textAreaRef?.(el);
            emojiTextAreaRef(el);
          }}
          name="text"
          class="min-h-[40px] rounded-md border-none focus:ring-rose-300"
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
          <EmojiPicker customEmojis={true} onEmojiSelect={handleEmojiSelect}>
            <span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">
              <FaceSmile />
            </span>
          </EmojiPicker>
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
            aria-label={i18n()('posting.contentWarning')}
            title={i18n()('posting.contentWarning')}
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
            title={i18n()('posting.uploadImage')}
            aria-label={i18n()('posting.uploadImage')}
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
            aria-label={i18n()('posting.submit')}
            title={i18n()('posting.submit')}
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
