import { createSignal, createMemo, Show, For, type Component, type JSX } from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import ExclamationTriangle from 'heroicons/24/outline/exclamation-triangle.svg';
import FaceSmile from 'heroicons/24/outline/face-smile.svg';
import Photo from 'heroicons/24/outline/photo.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';
import PaperAirplane from 'heroicons/24/solid/paper-airplane.svg';
import uniq from 'lodash/uniq';
import { Event as NostrEvent } from 'nostr-tools/pure';

import useEmojiPicker, { EmojiData } from '@/components/useEmojiPicker';
import UserNameDisplay from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import useEmojiComplete from '@/hooks/useEmojiComplete';
import { useTranslation } from '@/i18n/useTranslation';
import { type CreateTextNoteParams } from '@/nostr/builder/createTextNote';
import { textNote } from '@/nostr/event';
import parseTextNote, { ParsedTextNote } from '@/nostr/parseTextNote';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import { uploadFiles, uploadNostrBuild } from '@/utils/imageUpload';
// import usePersistStatus from '@/hooks/usePersistStatus';

type NotePostFormProps = {
  replyTo?: NostrEvent;
  mode?: 'normal' | 'reply';
  closable?: boolean;
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
  let contentWarningReasonRef: HTMLInputElement | undefined;
  let fileInputRef: HTMLInputElement | undefined;

  const { elementRef: emojiTextAreaRef } = useEmojiComplete();
  const [text, setText] = createSignal<string>('');
  const [contentWarning, setContentWarning] = createSignal(false);
  const [contentWarningReason, setContentWarningReason] = createSignal('');
  const [lastUsedHashTags, setLastUsedHashTags] = createSignal<string[]>([]);

  const appendText = (s: string) => setText((current) => (current === '' ? s : `${current} ${s}`));

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
        return i18n.t('posting.placeholderReply');
      case 'normal':
      default:
        return i18n.t('posting.placeholder');
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
        window.alert(i18n.t('posting.failedToUploadFile', { filenames }));
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
      window.alert(i18n.t('posting.forbiddenToIncludeNsec'));
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

    let textNoteParams: CreateTextNoteParams & { relayUrls: string[] } = {
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
    textAreaRef?.focus();
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

  const emojiPickerPopup = useEmojiPicker(() => ({
    customEmojis: true,
    onEmojiSelect: handleEmojiSelect,
  }));

  return (
    <div class="p-1">
      <Show when={props.replyTo != null}>
        <div>
          {i18n.t('posting.replyToPre')}
          <For each={notifyPubkeys()}>
            {(pubkey, index) => (
              <>
                <UserNameDisplay pubkey={pubkey} />
                <Show when={index() !== notifyPubkeys().length - 1}> と </Show>
              </>
            )}
          </For>
          {i18n.t('posting.replyToPost')}
        </div>
      </Show>
      <form class="flex flex-col gap-1" onSubmit={handleSubmit}>
        <Show when={contentWarning()}>
          <input
            ref={contentWarningReasonRef}
            type="text"
            class="rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
            placeholder={i18n.t('posting.contentWarningReason')}
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
          class="min-h-[40px] rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
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
          <Show when={mode() === 'reply' || props.closable}>
            <button
              class="flex items-center"
              classList={{
                'h-9': mode() === 'normal',
                'w-9': mode() === 'normal',
                'h-8': mode() === 'reply',
                'w-8': mode() === 'reply',
              }}
              onClick={() => close()}
            >
              <span class="inline-block size-5 text-fg-secondary/70">
                <XMark />
              </span>
            </button>
          </Show>
          <span class="flex-1" />
          <button
            ref={emojiPickerPopup.targetRef}
            class="inline-block rounded bg-primary text-primary-fg"
            classList={{
              'h-9': mode() === 'normal',
              'w-9': mode() === 'normal',
              'p-2': mode() === 'normal',
              'h-7': mode() === 'reply',
              'w-7': mode() === 'reply',
              'p-[6px]': mode() === 'reply',
            }}
            type="button"
            onClick={() => emojiPickerPopup.open()}
          >
            <FaceSmile />
          </button>
          {emojiPickerPopup.popup()}
          <button
            class="rounded text-primary-fg"
            classList={{
              'bg-primary': !contentWarning(),
              'bg-primary-hover': contentWarning(),
              'h-9': mode() === 'normal',
              'w-9': mode() === 'normal',
              'p-2': mode() === 'normal',
              'h-7': mode() === 'reply',
              'w-7': mode() === 'reply',
              'p-[6px]': mode() === 'reply',
            }}
            type="button"
            aria-label={i18n.t('posting.contentWarning')}
            title={i18n.t('posting.contentWarning')}
            onClick={() => {
              setContentWarning((e) => !e);
              contentWarningReasonRef?.focus();
            }}
          >
            <ExclamationTriangle />
          </button>
          <button
            class="rounded text-primary-fg"
            classList={{
              'bg-primary-disabled': fileUploadDisabled(),
              'bg-primary': !fileUploadDisabled(),
              'h-9': mode() === 'normal',
              'w-9': mode() === 'normal',
              'p-2': mode() === 'normal',
              'h-7': mode() === 'reply',
              'w-7': mode() === 'reply',
              'p-[6px]': mode() === 'reply',
            }}
            type="button"
            title={i18n.t('posting.uploadImage')}
            aria-label={i18n.t('posting.uploadImage')}
            disabled={fileUploadDisabled()}
            onClick={() => fileInputRef?.click()}
          >
            <Photo />
          </button>
          <button
            class="rounded p-2 text-primary-fg"
            classList={{
              'bg-primary-disabled': submitDisabled(),
              'bg-primary': !submitDisabled(),
              'h-9': mode() === 'normal',
              'w-9': mode() === 'normal',
              'h-7': mode() === 'reply',
              'w-7': mode() === 'reply',
            }}
            type="submit"
            aria-label={i18n.t('posting.submit')}
            title={i18n.t('posting.submit')}
            disabled={submitDisabled()}
          >
            <PaperAirplane />
          </button>
        </div>
        <input
          ref={fileInputRef}
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
