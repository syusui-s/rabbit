import { createSignal, For, JSX } from 'solid-js';

import XMark from 'heroicons/24/outline/x-mark.svg';

import EventDisplayById from '@/components/event/EventDisplayById';
import Section from '@/components/modal/config/Section';
import UserNameDisplay from '@/components/UserDisplayName';
import LazyLoad from '@/components/utils/LazyLoad';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';

const MuteConfig = () => {
  const i18n = useTranslation();
  const { config, removeMutedPubkey, removeMutedThread, addMutedKeyword, removeMutedKeyword } =
    useConfig();

  const [keywordInput, setKeywordInput] = createSignal('');

  const handleClickAddKeyword: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    if (keywordInput().length === 0) return;
    addMutedKeyword(keywordInput());
    setKeywordInput('');
  };

  return (
    <>
      <Section title={i18n.t('config.mute.mutedUsers')} initialOpened={false}>
        <ul class="flex max-h-[50vh] min-h-64 flex-col overflow-y-auto">
          <For each={config().mutedPubkeys}>
            {(pubkey) => (
              <li class="flex items-center border-b border-border pr-4">
                <div class="flex-1 truncate">
                  <LazyLoad fallback={<div class="h-4" />}>
                    {() => <UserNameDisplay pubkey={pubkey} />}
                  </LazyLoad>
                </div>
                <button class="size-3 shrink-0" onClick={() => removeMutedPubkey(pubkey)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
      </Section>
      <Section title={i18n.t('config.mute.mutedKeywords')} initialOpened={false}>
        <form class="flex gap-2" onSubmit={handleClickAddKeyword}>
          <input
            class="flex-1 rounded-md border border-border bg-bg ring-border focus:border-border focus:ring-primary"
            type="text"
            name="keyword"
            value={keywordInput()}
            onChange={(ev) => setKeywordInput(ev.currentTarget.value)}
          />
          <button type="submit" class="rounded bg-primary p-2 font-bold text-primary-fg">
            {i18n.t('config.mute.add')}
          </button>
        </form>
        <ul class="mt-2 flex max-h-[50vh] min-h-64 flex-col overflow-y-auto border-t border-border">
          <For each={config().mutedKeywords}>
            {(keyword) => (
              <li class="flex items-center border-b border-border pr-4">
                <div class="flex-1 truncate">{keyword}</div>
                <button class="size-3 shrink-0" onClick={() => removeMutedKeyword(keyword)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
      </Section>
      <Section title={i18n.t('config.mute.mutedThreads')} initialOpened={false}>
        <ul class="flex max-h-[50vh] min-h-64 flex-col gap-1 overflow-y-auto">
          <For each={config().mutedThreads}>
            {(eventId) => (
              <li class="flex items-center">
                <div class="flex-1 truncate rounded border border-border p-2">
                  <LazyLoad fallback={<div class="h-4" />}>
                    {() => <EventDisplayById eventId={eventId} actions={false} displayForcibly />}
                  </LazyLoad>
                </div>
                <button class="p-4" onClick={() => removeMutedThread(eventId)}>
                  <span class="inline-block size-4">
                    <XMark />
                  </span>
                </button>
              </li>
            )}
          </For>
        </ul>
      </Section>
    </>
  );
};

export default MuteConfig;
