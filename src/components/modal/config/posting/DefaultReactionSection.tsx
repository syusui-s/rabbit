import { Show } from 'solid-js';

import Section from '@/components/modal/config/Section';
import ReactionEmojiDisplay from '@/components/ReactionEmojiDisplay';
import useConfig, { type DefaultReaction } from '@/core/useConfig';
import useEmojiComplete from '@/hooks/useEmojiComplete';
import { useTranslation } from '@/i18n/useTranslation';
import { parseReactionText } from '@/nostr/defaultReaction';

const DefaultReactionSection = () => {
  const i18n = useTranslation();
  const { config, setConfig, getEmoji } = useConfig();
  const { elementRef: emojiCompleteRef } = useEmojiComplete();

  const updateDefaultReaction = (defaultReaction: Partial<DefaultReaction>) => {
    setConfig((current) => ({
      ...current,
      defaultReaction: { ...current.defaultReaction, ...defaultReaction },
    }));
  };

  const isCustom = () => config().defaultReaction.type === 'custom';
  const customReaction = () => parseReactionText(config().defaultReaction.content, getEmoji);

  return (
    <Section title={i18n.t('config.posting.defaultReaction')}>
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2">
          <input
            type="radio"
            name="defaultReaction"
            checked={!isCustom()}
            onChange={() => updateDefaultReaction({ type: 'default' })}
          />
          {i18n.t('config.posting.defaultReactionDefault')}
        </label>
        <label class="flex items-center gap-2">
          <input
            type="radio"
            name="defaultReaction"
            checked={isCustom()}
            onChange={() => updateDefaultReaction({ type: 'custom' })}
          />
          {i18n.t('config.posting.defaultReactionCustom')}
          <input
            ref={emojiCompleteRef}
            class="w-40 rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
            type="text"
            placeholder={i18n.t('config.posting.defaultReactionPlaceholder')}
            value={config().defaultReaction.content}
            onInput={(ev) =>
              updateDefaultReaction({ type: 'custom', content: ev.currentTarget.value })
            }
          />
          <Show when={customReaction()} keyed>
            {(reactionTypes) => (
              <span class="inline-block h-6 max-w-12">
                <ReactionEmojiDisplay reactionTypes={reactionTypes} />
              </span>
            )}
          </Show>
        </label>
        <Show when={isCustom() && customReaction() == null}>
          <p class="text-xs text-danger">{i18n.t('config.posting.defaultReactionInvalid')}</p>
        </Show>
      </div>
    </Section>
  );
};

export default DefaultReactionSection;
