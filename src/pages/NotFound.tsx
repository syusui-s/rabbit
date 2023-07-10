import type { Component } from 'solid-js';

const NotFound: Component = () => (
  <div class="container mx-auto max-w-[640px] py-10">
    <h1 class="text-4xl font-bold text-stone-700">お探しのページは見つかりませんでした</h1>
    <p class="pt-4">
      <a class="text-blue-500 underline" href="/">
        ← トップに戻る
      </a>
    </p>
  </div>
);

export default NotFound;
