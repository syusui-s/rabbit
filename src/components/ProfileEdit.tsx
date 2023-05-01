import { createSignal, type Component, batch, onMount, For, JSX, Show } from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';
import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';

import Modal from '@/components/Modal';
import useConfig from '@/core/useConfig';
import { Profile, useProfile } from '@/nostr/useBatchedEvents';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import ensureNonNull from '@/utils/ensureNonNull';
import timeout from '@/utils/timeout';

export type ProfileEditProps = {
  onClose: () => void;
};

const LNURLRegexString = 'LNURL1[AC-HJ-NP-Zac-hj-np-z02-9]+';
const InternetIdentiferRegexString = '[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+';
const LUDAddressRegexString = `^(${LNURLRegexString}|${InternetIdentiferRegexString})$`;

const LNURLRegex = new RegExp(`^${LNURLRegexString}$`);
const InternetIdentiferRegex = new RegExp(`^${InternetIdentiferRegexString}$`);

const isLNURL = (s: string) => LNURLRegex.test(s);
const isInternetIdentifier = (s: string) => InternetIdentiferRegex.test(s);

const ProfileEdit: Component<ProfileEditProps> = (props) => {
  const pubkey = usePubkey();
  const { config } = useConfig();
  const { profile, invalidateProfile, query } = useProfile(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      pubkey: pubkeyNonNull,
    })),
  );
  const { updateProfile } = useCommands();

  const [picture, setPicture] = createSignal('');
  const [banner, setBanner] = createSignal('');
  const [name, setName] = createSignal('');
  const [displayName, setDisplayName] = createSignal('');
  const [about, setAbout] = createSignal('');
  const [website, setWebsite] = createSignal('');
  const [nip05, setNIP05] = createSignal('');
  const [lightningAddress, setLightningAddress] = createSignal('');

  const mutation = createMutation({
    mutationKey: ['updateProfile'],
    mutationFn: (...params: Parameters<typeof updateProfile>) =>
      updateProfile(...params).then((promeses) => Promise.allSettled(promeses.map(timeout(10000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        window.alert('更新しました');
      } else if (succeeded > 0) {
        window.alert(`${failed}個のリレーで更新に失敗しました`);
      } else {
        window.alert('すべてのリレーで更新に失敗しました');
      }
      invalidateProfile()
        .then(() => query.refetch())
        .catch((err) => console.error(err));

      props.onClose();
    },
    onError: (err) => {
      console.error('failed to delete', err);
    },
  });

  const disabled = () => query.isLoading || query.isError || mutation.isLoading;
  const otherProperties = () =>
    omit(profile(), [
      'picture',
      'banner',
      'name',
      'display_name',
      'about',
      'website',
      'nip05',
      'lud06',
      'lud16',
    ]);

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();

    const p = pubkey();
    if (p == null) return;

    const newProfile: Profile = omitBy(
      {
        picture: picture(),
        banner: banner(),
        name: name(),
        display_name: displayName(),
        about: about(),
        website: website(),
        nip05: nip05(),
        lud06: isLNURL(lightningAddress()) ? lightningAddress() : null,
        lud16: isInternetIdentifier(lightningAddress()) ? lightningAddress() : null,
      },
      (v) => v == null || v.length === 0,
    );

    mutation.mutate({
      relayUrls: config().relayUrls,
      pubkey: p,
      profile: newProfile,
      otherProperties: otherProperties(),
    });
  };

  const ignoreEnter = (ev: KeyboardEvent) => ev.key === 'Enter' && ev.preventDefault();

  onMount(() => {
    const currentProfile = profile();
    if (currentProfile == null) return;

    query.refetch().catch((err) => console.error(err));

    batch(() => {
      setPicture((current) => currentProfile.picture ?? current);
      setBanner((current) => currentProfile.banner ?? current);
      setName((current) => currentProfile.name ?? current);
      setDisplayName((current) => currentProfile.display_name ?? current);
      setAbout((current) => currentProfile.about ?? current);
      setWebsite((current) => currentProfile.website ?? current);
      setNIP05((current) => currentProfile.nip05 ?? current);
      if (currentProfile.lud16 != null) {
        setLightningAddress(currentProfile.lud16);
      } else if (currentProfile.lud06 != null) {
        setLightningAddress(currentProfile.lud06);
      }
    });
  });

  return (
    <Modal onClose={props.onClose}>
      <div class="h-screen w-[640px] max-w-full">
        <button
          class="w-full pt-1 text-start text-stone-800"
          aria-label="Close"
          onClick={() => props.onClose?.()}
        >
          <span class="inline-block h-8 w-8">
            <ArrowLeft />
          </span>
        </button>
        <div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">
          <div>
            <Show when={banner().length > 0} fallback={<div class="h-12 shrink-0" />} keyed>
              <div class="h-40 w-full shrink-0 sm:h-52">
                <img src={banner()} alt="header" class="h-full w-full object-cover" />
              </div>
            </Show>
            <div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">
              <Show when={picture().length > 0}>
                <img
                  src={picture()}
                  alt="user icon"
                  class="h-full w-full rounded-lg object-cover"
                />
              </Show>
            </div>
          </div>
          <div>
            <form class="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="picture">
                  アイコン
                </label>
                <input
                  class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"
                  type="text"
                  id="picture"
                  name="picture"
                  value={picture()}
                  placeholder="https://....../picture.png"
                  disabled={disabled()}
                  onBlur={(ev) => setPicture(ev.currentTarget.value)}
                  onKeyDown={ignoreEnter}
                />
              </div>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="picture">
                  バナー
                </label>
                <input
                  class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"
                  type="text"
                  id="banner"
                  name="banner"
                  value={banner()}
                  placeholder="https://....../banner.png"
                  disabled={disabled()}
                  onBlur={(ev) => setBanner(ev.currentTarget.value)}
                  onKeyDown={ignoreEnter}
                />
              </div>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="name">
                  ユーザ名
                </label>
                <div class="flex w-full items-center gap-2">
                  <span>@</span>
                  <input
                    class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
                    type="text"
                    id="name"
                    name="name"
                    value={name()}
                    pattern="^[a-zA-Z_][a-zA-Z0-9_]+$"
                    maxlength="32"
                    required
                    disabled={disabled()}
                    onChange={(ev) => setName(ev.currentTarget.value)}
                    onKeyDown={ignoreEnter}
                  />
                </div>
              </div>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="name">
                  名前
                </label>
                <input
                  class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"
                  type="text"
                  name="displayName"
                  value={displayName()}
                  maxlength="32"
                  disabled={disabled()}
                  onChange={(ev) => setDisplayName(ev.currentTarget.value)}
                  onKeyDown={ignoreEnter}
                />
              </div>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="name">
                  自己紹介
                </label>
                <textarea
                  class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"
                  name="about"
                  value={about()}
                  rows="5"
                  onChange={(ev) => setAbout(ev.currentTarget.value)}
                  disabled={disabled()}
                />
              </div>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="name">
                  ウェブサイト
                </label>
                <input
                  class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"
                  type="text"
                  name="website"
                  value={website()}
                  placeholder="https://....../"
                  disabled={disabled()}
                  onChange={(ev) => setWebsite(ev.currentTarget.value)}
                  onKeyDown={ignoreEnter}
                />
              </div>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="name">
                  ドメイン認証（NIP-05）
                </label>
                <input
                  class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"
                  type="text"
                  name="nip05"
                  value={nip05()}
                  placeholder="yourname@domain.example.com"
                  pattern={InternetIdentiferRegex.source}
                  disabled={disabled()}
                  onChange={(ev) => setNIP05(ev.currentTarget.value)}
                  onKeyDown={ignoreEnter}
                />
              </div>
              <div class="flex flex-col items-start gap-1">
                <label class="font-bold" for="name">
                  LNURLアドレス / ライトニングアドレス
                </label>
                <span class="text-xs">どちらか片方のみが保存されます。</span>
                <input
                  class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"
                  type="text"
                  name="website"
                  value={lightningAddress()}
                  pattern={LUDAddressRegexString}
                  placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"
                  disabled={disabled()}
                  onChange={(ev) => setLightningAddress(ev.currentTarget.value)}
                  onKeyDown={ignoreEnter}
                />
              </div>
              <Show when={Object.entries(otherProperties()).length > 0}>
                <div>
                  <span class="font-bold">その他の項目</span>
                  <div>
                    <For each={Object.entries(otherProperties())}>
                      {([key, value]) => (
                        <div class="flex flex-col items-start ">
                          <span class="text-sm font-bold">{key}</span>
                          <span class="whitespace-pre-wrap break-all text-sm">{value}</span>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              </Show>
              <div class="flex gap-2">
                <button
                  type="submit"
                  class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"
                  disabled={mutation.isLoading}
                >
                  保存
                </button>
                <button
                  type="button"
                  class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400"
                  onClick={() => props.onClose()}
                >
                  キャンセル
                </button>
              </div>
              <Show when={mutation.isLoading}>保存中...</Show>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ProfileEdit;
