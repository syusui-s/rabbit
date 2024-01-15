import { Component, createResource, For, Show } from 'solid-js';

import BasicModal from '@/components/modal/BasicModal';
import SafeLink from '@/components/utils/SafeLink';
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
  const [packageInfo] = createResource(fetchPackageInfo);

  return (
    <BasicModal onClose={props.onClose}>
      <div class="p-8">
        <div class="flex flex-col items-center pt-8">
          <img src={resolveAsset('images/rabbit_app_256.png')} alt="Logo" width="64" height="64" />

          <h1 class="my-4">
            Rabbit{' '}
            <span id="app-version">
              v{packageInfo()?.self?.version}
              <Show when={commit}> ({commit})</Show>
            </span>
          </h1>
        </div>

        <h2 class="my-4 text-xl font-bold">バグ報告について</h2>

        <p class="my-4">
          おかしな動作を見つけたら
          <a
            class="text-link underline"
            href="https://github.com/syusui-s/rabbit/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHubのIssues
          </a>
          までご報告ください。
        </p>

        <h2 class="my-4 text-xl font-bold">ソースコード</h2>

        <p class="my-4">
          ソースコードは
          <SafeLink class="text-link underline" href="https://github.com/syusui-s/rabbit">
            GitHub
          </SafeLink>
          で入手できます。
        </p>

        <h2 class="my-4 text-xl font-bold">利用規約</h2>

        <p class="my-4">
          Copyright (C) 2023 Shusui Moyatani and{' '}
          <SafeLink
            class="text-link underline"
            href="https://github.com/syusui-s/rabbit/graphs/contributors"
          >
            Rabbit contributors
          </SafeLink>
        </p>

        <p class="my-4">
          このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された
          GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で
          再頒布や改変、あるいはその両方を行うことができます。
        </p>

        <p class="my-4">
          このプログラムは役立つことを願って頒布されていますが、
          <strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や
          <em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。
          詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。
        </p>

        <p class="my-4">
          あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。
          そうでなければ、
          <SafeLink href="https://www.gnu.org/licenses/" />
          をご参照ください。
        </p>

        <a class="text-link underline" href="https://gpl.mhatta.org/agpl.ja.html">
          参考訳
        </a>

        <pre class="scorllbar max-h-96 overflow-auto rounded bg-bg-secondary p-4 text-xs">
          {packageInfo()?.self.licenseText}
        </pre>

        <h2 class="my-4 text-xl font-bold">使用ライブラリ</h2>

        <For each={packageInfo()?.packages ?? []} fallback="取得中">
          {(p) => (
            <>
              <h3 class="mb-2 mt-4 font-mono">
                {p.name}@{p.version} ({p.licenseSpdx})
              </h3>
              <pre class="scrollbar max-h-96 overflow-auto rounded bg-bg-secondary p-4 text-xs">
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
