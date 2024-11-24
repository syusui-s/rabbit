import { type JSX } from 'solid-js';

import Section from '@/components/modal/config/Section';
import useConfig, { ConfigSchema } from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';

const BackupSection = () => {
  let fileInputRef: HTMLInputElement | undefined;

  const i18n = useTranslation();
  const config = useConfig();

  const handleSave = () => {
    const json = JSON.stringify(config.config(), null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const dataUrl = URL.createObjectURL(blob);

    const datetime = new Date().toISOString();
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `rabbit-${datetime}.json`;

    link.click();
  };

  const handleRestore = () => {
    if (fileInputRef == null) return;
    fileInputRef.click();
  };

  const restore = async (file: File) => {
    try {
      const json = await file.text();
      const validated = ConfigSchema.parse(JSON.parse(json));
      config.setConfig(validated);

      window.alert(i18n.t('config.account.restored'));
      window.location.reload();
    } catch (e) {
      if (e instanceof Error) {
        window.alert(`${i18n.t('config.account.failedToRestore')}: ${e.message}`);
      } else {
        window.alert(i18n.t('config.account.failedToRestore'));
      }
    }
  };

  const handleChangeFile: JSX.EventHandler<HTMLInputElement, Event> = (ev) => {
    ev.preventDefault();

    const files = [...(ev.currentTarget.files ?? [])];
    if (files.length !== 1) return;
    const file = files[0];
    restore(file).catch((err) => console.log(err));
  };

  return (
    <Section title={i18n.t('config.account.backupConfig')}>
      <div class="flex gap-2 py-1">
        <button
          class="rounded border border-primary px-4 py-1 font-bold text-primary"
          onClick={handleSave}
        >
          {i18n.t('config.account.save')}
        </button>
        <button
          class="rounded border border-primary px-4 py-1 font-bold text-primary"
          onClick={handleRestore}
        >
          {i18n.t('config.account.restore')}
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        multiple={false}
        name="config"
        accept="application/json"
        onChange={handleChangeFile}
      />
    </Section>
  );
};

export default BackupSection;
