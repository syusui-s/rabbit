import type { Component } from 'solid-js';

import { useTranslation } from '@/i18n/useTranslation';

const NotFound: Component = () => {
  const i18n = useTranslation();

  return (
    <div class="container mx-auto max-w-[640px] py-10">
      <h1 class="text-4xl font-bold text-fg">{i18n.t('notFound.title')}</h1>
      <p class="pt-4">
        <a class="text-link underline" href="/">
          {i18n.t('notFound.back')}
        </a>
      </p>
    </div>
  );
};

export default NotFound;
