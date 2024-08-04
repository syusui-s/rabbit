import { createSignal, type Component, batch, onMount, For, JSX, Show } from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';
import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';

import BasicModal from '@/components/modal/BasicModal';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import { Profile } from '@/nostr/event/Profile';
import useCommands from '@/nostr/useCommands';
import useProfile from '@/nostr/useProfile';
import usePubkey from '@/nostr/usePubkey';
import ensureNonNull from '@/utils/ensureNonNull';
import timeout from '@/utils/timeout';

export type ProfileEditProps = {
  onClose: () => void;
};

const LNURLRegexString = '(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)';
const InternetIdentifierRegexString = '[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+';
const LUDAddressRegexString = `^(${LNURLRegexString}|${InternetIdentifierRegexString})$`;

const LNURLRegex = new RegExp(`^${LNURLRegexString}$`);
const InternetIdentifierRegex = new RegExp(`^${InternetIdentifierRegexString}$`);

const isLNURL = (s: string) => LNURLRegex.test(s);
const isInternetIdentifier = (s: string) => InternetIdentifierRegex.test(s);

const ProfileEdit: Component<ProfileEditProps> = (props) => {
  const i18n = useTranslation();
  const pubkey = usePubkey();
  const { config } = useConfig();

  const [picture, setPicture] = createSignal('');
  const [banner, setBanner] = createSignal('');
  const [name, setName] = createSignal('');
  const [displayName, setDisplayName] = createSignal('');
  const [about, setAbout] = createSignal('');
  const [website, setWebsite] = createSignal('');
  const [nip05, setNIP05] = createSignal('');
  const [lightningAddress, setLightningAddress] = createSignal('');

  const { profile, invalidateProfile, query } = useProfile(() =>
    ensureNonNull([pubkey()] as const)(([pubkeyNonNull]) => ({
      pubkey: pubkeyNonNull,
    })),
  );
  const { updateProfile } = useCommands();

  const mutation = createMutation(() => ({
    mutationKey: ['updateProfile'],
    mutationFn: (...params: Parameters<typeof updateProfile>) =>
      updateProfile(...params).then((promeses) => Promise.allSettled(promeses.map(timeout(10000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        window.alert(i18n.t('profile.edit.updateSucceeded'));
      } else if (succeeded > 0) {
        window.alert(i18n.t('profile.edit.failedToUpdatePartially', { count: failed }));
      } else {
        window.alert(i18n.t('profile.edit.failedToUpdate'));
      }
      invalidateProfile()
        .then(() => query.refetch())
        .catch((err) => console.error(err));

      props.onClose();
    },
    onError: (err) => {
      console.error('failed to delete', err);
    },
  }));

  const loading = () => query.isPending || mutation.isPending;
  const disabled = () => loading();

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
    <BasicModal closeButton={() => <ArrowLeft />} onClose={props.onClose}>
      <div>
        <Show when={banner().length > 0} fallback={<div class="h-24 shrink-0" />} keyed>
          <div class="h-40 w-full shrink-0 sm:h-52">
            <img src={banner()} alt="header" class="size-full object-cover" />
          </div>
        </Show>
        <div class="ml-4 mt-[-64px] size-28 rounded-lg shadow-md">
          <Show when={picture().length > 0}>
            <img src={picture()} alt="user icon" class="size-full rounded-lg object-cover" />
          </Show>
        </div>
      </div>
      <Show when={loading()}>
        <div class="px-4 pt-4">{i18n.t('general.loading')}</div>
      </Show>
      <div>
        <form class="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
          <div class="flex flex-col items-start gap-1">
            <label class="font-bold" for="picture">
              {i18n.t('profile.edit.icon')}
            </label>
            <input
              class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"
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
              {i18n.t('profile.edit.banner')}
            </label>
            <input
              class="w-full rounded-md border-border bg-bg focus:border-border focus:ring-primary"
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
              {i18n.t('profile.edit.name')}
            </label>
            <div class="flex w-full items-center gap-2">
              <span>@</span>
              <input
                class="flex-1 rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"
                type="text"
                id="name"
                name="name"
                value={name()}
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
              {i18n.t('profile.edit.displayName')}
            </label>
            <input
              class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"
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
              {i18n.t('profile.edit.about')}
            </label>
            <textarea
              class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"
              name="about"
              value={about()}
              rows="5"
              onChange={(ev) => setAbout(ev.currentTarget.value)}
              disabled={disabled()}
            />
          </div>
          <div class="flex flex-col items-start gap-1">
            <label class="font-bold" for="name">
              {i18n.t('profile.edit.website')}
            </label>
            <input
              class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"
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
              {i18n.t('profile.edit.nip05')}
            </label>
            <input
              class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"
              type="text"
              name="nip05"
              value={nip05()}
              placeholder="yourname@domain.example.com"
              pattern={InternetIdentifierRegex.source}
              disabled={disabled()}
              onChange={(ev) => setNIP05(ev.currentTarget.value)}
              onKeyDown={ignoreEnter}
            />
          </div>
          <div class="flex flex-col items-start gap-1">
            <label class="font-bold" for="name">
              {i18n.t('profile.edit.lightningAddress')}
            </label>
            <span class="text-xs">{i18n.t('profile.edit.lightningAddressDescription')}</span>
            <input
              class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"
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
              <span class="font-bold">{i18n.t('profile.edit.otherProperties')}</span>
              <div>
                <For each={Object.entries(otherProperties())}>
                  {([key, value]) => (
                    <div class="flex flex-col items-start">
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
              class="rounded p-2 font-bold text-primary-fg hover:bg-primary-hover"
              classList={{
                'bg-primary': !mutation.isPending,
                'bg-primary-disabled': mutation.isPending,
              }}
              disabled={mutation.isPending}
            >
              {i18n.t('profile.edit.save')}
            </button>
            <button
              type="button"
              class="rounded border border-primary p-2 font-bold text-primary hover:border-primary-hover hover:text-primary-hover"
              onClick={() => props.onClose()}
            >
              {i18n.t('profile.edit.cancel')}
            </button>
          </div>
          <Show when={mutation.isPending}>{i18n.t('profile.edit.updating')}</Show>
        </form>
      </div>
    </BasicModal>
  );
};
export default ProfileEdit;
