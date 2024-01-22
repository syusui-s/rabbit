import { Component, createResource, For, Show } from 'solid-js';

import BasicModal from '@/components/modal/BasicModal';
import SafeLink from '@/components/utils/SafeLink';
import { useTranslation } from '@/i18n/useTranslation';
import resolveAsset from '@/utils/resolveAsset';

type AboutProps = {
  onClose: () => void;
};

type PackageInfo = {
  self: {
    name: string;
    author: string;
    version: string;
    homepage: string;
    licenseSpdx: string;
    licenseText: string;
  };
  packages: {
    name: string;
    version: string;
    licenseSpdx: string;
    licenseText: string;
  }[];
};

const fetchPackageInfo = async (): Promise<PackageInfo> => {
  const res = await fetch(resolveAsset('packageInfo.json'));
  const body = await res.text();
  return JSON.parse(body) as PackageInfo;
};

const commit = import.meta.env.VITE_COMMIT as string | null;

const About: Component<AboutProps> = (props) => {
  const i18n = useTranslation();

  const [packageInfo] = createResource(fetchPackageInfo);

  return (
    <BasicModal onClose={props.onClose}>
      <div class="p-8">
        <div class="flex flex-col items-center pt-8">
          <img src={resolveAsset('images/rabbit_app_256.png')} alt="Logo" width="64" height="64" />

          <h1 class="my-4">
            Rabbit{' '}
            <span id="app-version">
              <Show when={commit} fallback="(dev)">
                {' '}
                ({commit})
              </Show>
            </span>
          </h1>
        </div>

        <div class="my-4 flex justify-center gap-3">
          <SafeLink
            class="rounded border-2 border-primary px-4 py-2 font-bold text-primary hover:border-primary-hover hover:text-primary-hover"
            href="https://github.com/syusui-s/rabbit/issues/new/choose"
          >
            {i18n.t('about.bugReport')}
          </SafeLink>
          <SafeLink
            class="rounded border-2 border-primary px-4 py-2 font-bold text-primary hover:border-primary-hover hover:text-primary-hover"
            href="https://github.com/syusui-s/rabbit"
          >
            {i18n.t('about.sourceCode')}
          </SafeLink>
        </div>

        <h2 class="my-4 text-xl font-bold">{i18n.t('about.termOfService')}</h2>

        <p class="my-4">
          Copyright (C) 2023 Shusui Moyatani and{' '}
          <SafeLink
            class="text-link underline"
            href="https://github.com/syusui-s/rabbit/graphs/contributors"
          >
            Rabbit contributors
          </SafeLink>
        </p>

        <pre class=" max-h-96 overflow-auto rounded bg-bg-tertiary p-2 text-sm">
          {i18n.t('about.agplText')}
        </pre>

        <p>
          <SafeLink class="text-link underline" href="https://gpl.mhatta.org/agpl.ja.html">
            {i18n.t('about.agplTranslationJa')}
          </SafeLink>
        </p>

        <pre class="scrollbar max-h-96 overflow-auto rounded bg-bg-tertiary p-4 text-xs">
          {packageInfo()?.self.licenseText}
        </pre>

        <h2 class="my-4 text-xl font-bold">{i18n.t('about.usingLibraries')}</h2>

        <For each={packageInfo()?.packages ?? []}>
          {(p) => (
            <>
              <h3 class="mb-2 mt-4 font-mono">
                {p.name}@{p.version} ({p.licenseSpdx})
              </h3>
              <pre class="scrollbar max-h-96 overflow-auto rounded bg-bg-tertiary p-4 text-xs">
                {p.licenseText}
              </pre>
            </>
          )}
        </For>
      </div>
    </BasicModal>
  );
};

export default About;
