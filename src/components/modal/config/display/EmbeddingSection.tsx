import Section from '@/components/modal/config/Section';
import ToggleButton from '@/components/modal/config/ToggleButton';
import useConfig, { type Config } from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';

const EmbeddingSection = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const toggle = (key: keyof Config['embedding']) => {
    setConfig((current) => ({
      ...current,
      embedding: {
        ...current.embedding,
        [key]: !current.embedding[key],
      },
    }));
  };

  return (
    <Section title={i18n.t('config.display.embedding')}>
      <p>{i18n.t('config.display.embeddingDescription')}</p>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">YouTube</div>
          <ToggleButton value={config().embedding.youtube} onClick={() => toggle('youtube')} />
        </div>
        <div class="flex w-full">
          <div class="flex-1">X (Twitter)</div>
          <ToggleButton value={config().embedding.twitter} onClick={() => toggle('twitter')} />
        </div>
        <div class="flex w-full">
          <div class="flex-1">OGP</div>
          <ToggleButton value={config().embedding.ogp} onClick={() => toggle('ogp')} />
        </div>
      </div>
    </Section>
  );
};

export default EmbeddingSection;
