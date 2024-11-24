import { createSignal, Show, For } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';
import EyeSlash from 'heroicons/24/outline/eye-slash.svg';
import FaceSmile from 'heroicons/24/outline/face-smile.svg';
import PaintBrush from 'heroicons/24/outline/paint-brush.svg';
import ServerStack from 'heroicons/24/outline/server-stack.svg';
import User from 'heroicons/24/outline/user.svg';

import BasicModal from '@/components/modal/BasicModal';
import ColorThemeSection from '@/components/modal/config/display/ColorThemeSection';
import DateFormatSection from '@/components/modal/config/display/DateFormatSection';
import EmbeddingSection from '@/components/modal/config/display/EmbeddingSection';
import OtherSection from '@/components/modal/config/display/OtherSection';
import ReactionSection from '@/components/modal/config/display/ReactionSection';
import EmojiImportSection from '@/components/modal/config/emoji/EmojiImportSection';
import EmojiSection from '@/components/modal/config/emoji/EmojiSection';
import MuteConfig from '@/components/modal/config/mute/MuteConfig';
import BackupSection from '@/components/modal/config/profile/BackupSection';
import ProfileSection from '@/components/modal/config/profile/ProfileSection';
import RelayConfig from '@/components/modal/config/relays/RelayConfig';
import { useTranslation } from '@/i18n/useTranslation';

type ConfigProps = {
  onClose: () => void;
};

const ConfigUI = (props: ConfigProps) => {
  const i18n = useTranslation();
  const [menuIndex, setMenuIndex] = createSignal<number | null>(null);

  const menu = [
    {
      name: () => i18n.t('config.account.profile'),
      icon: () => <User />,
      render: () => (
        <>
          <ProfileSection />
          <BackupSection />
        </>
      ),
    },
    {
      name: () => i18n.t('config.relays.relays'),
      icon: () => <ServerStack />,
      render: () => <RelayConfig />,
    },
    {
      name: () => i18n.t('config.display.display'),
      icon: () => <PaintBrush />,
      render: () => (
        <>
          <ColorThemeSection />
          <DateFormatSection />
          <ReactionSection />
          <EmbeddingSection />
          <OtherSection />
        </>
      ),
    },
    {
      name: () => i18n.t('config.customEmoji.customEmoji'),
      icon: () => <FaceSmile />,
      render: () => (
        <>
          <EmojiSection />
          <EmojiImportSection />
        </>
      ),
    },
    {
      name: () => i18n.t('config.mute.mute'),
      icon: () => <EyeSlash />,
      render: () => <MuteConfig />,
    },
  ];

  const getMenuItem = () => {
    const index = menuIndex();
    if (index == null) return null;
    return menu[index];
  };

  return (
    <BasicModal onClose={props.onClose}>
      <div class="p-4">
        <Show
          when={getMenuItem()}
          fallback={
            <>
              <h2 class="flex-1 text-center text-lg font-bold">{i18n.t('config.config')}</h2>
              <ul class="flex flex-col">
                <For each={menu}>
                  {(menuItem, i) => (
                    <li class="w-full">
                      <button
                        class="flex w-full gap-2 py-3 hover:text-primary"
                        onClick={() => setMenuIndex(i)}
                      >
                        <span class="inline-block size-6">{menuItem.icon()}</span>
                        {menuItem.name()}
                      </button>
                    </li>
                  )}
                </For>
              </ul>
            </>
          }
          keyed
        >
          {(menuItem) => (
            <div class="flex flex-col">
              <div>
                <button
                  class="pr-4 text-fg hover:text-fg-secondary"
                  onClick={() => setMenuIndex(null)}
                >
                  <span class="inline-block size-6">
                    <ArrowLeft />
                  </span>
                </button>
              </div>
              <div class="w-full flex-1 pt-4">{menuItem.render()}</div>
            </div>
          )}
        </Show>
      </div>
    </BasicModal>
  );
};

export default ConfigUI;
