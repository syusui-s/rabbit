import Section from '@/components/modal/config/Section';
import ToggleButton from '@/components/modal/config/ToggleButton';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';

const ReactionSection = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const toggleUseEmojiReaction = () => {
    setConfig((current) => ({
      ...current,
      useEmojiReaction: !(current.useEmojiReaction ?? false),
    }));
  };

  const toggleShowEmojiReaction = () => {
    setConfig((current) => ({
      ...current,
      showEmojiReaction: !(current.showEmojiReaction ?? false),
    }));
  };

  return (
    <Section title={i18n.t('config.display.reaction')}>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.enableEmojiReaction')}</div>
          <ToggleButton
            value={config().useEmojiReaction}
            onClick={() => toggleUseEmojiReaction()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.showEmojiReaction')}</div>
          <ToggleButton
            value={config().showEmojiReaction}
            onClick={() => toggleShowEmojiReaction()}
          />
        </div>
      </div>
    </Section>
  );
};

export default ReactionSection;
