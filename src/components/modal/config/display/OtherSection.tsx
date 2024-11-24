import Section from '@/components/modal/config/Section';
import ToggleButton from '@/components/modal/config/ToggleButton';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';

const OtherSection = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const toggleKeepOpenPostForm = () => {
    setConfig((current) => ({
      ...current,
      keepOpenPostForm: !(current.keepOpenPostForm ?? false),
    }));
  };

  const toggleShowMedia = () => {
    setConfig((current) => ({
      ...current,
      showMedia: !(current.showMedia ?? true),
    }));
  };

  const toggleHideCount = () => {
    setConfig((current) => ({
      ...current,
      hideCount: !(current.hideCount ?? false),
    }));
  };

  return (
    <Section title={i18n.t('config.display.others')}>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.keepOpenPostForm')}</div>
          <ToggleButton
            value={config().keepOpenPostForm}
            onClick={() => toggleKeepOpenPostForm()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.showMediaByDefault')}</div>
          <ToggleButton value={config().showMedia} onClick={() => toggleShowMedia()} />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.hideNumbers')}</div>
          <ToggleButton value={config().hideCount} onClick={() => toggleHideCount()} />
        </div>
        {/*
        <div class="flex w-full">
          <div class="flex-1">リアクションのデフォルト</div>
          <input
            type="text"
            maxlength="1"
            // onBlur={handleChangeReaction}
          />
        </div>
        */}
      </div>
    </Section>
  );
};

export default OtherSection;
