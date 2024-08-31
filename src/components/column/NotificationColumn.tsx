import { type JSX, createEffect, Component, For } from 'solid-js';

import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import AtSymbol from 'heroicons/24/outline/at-symbol.svg';
import Bell from 'heroicons/24/outline/bell.svg';
import Bolt from 'heroicons/24/solid/bolt.svg';
import HeartSolid from 'heroicons/24/solid/heart.svg';
import uniq from 'lodash/uniq';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column from '@/components/column/Column';
import ColumnSettings, {
  ColumnSettingsSection,
  RenderOtherSettingsProps,
} from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Notification from '@/components/timeline/Notification';
import {
  type NotificationColumnType,
  type NotificationType,
  NotificationTypes,
} from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useSubscription from '@/nostr/useSubscription';

type NotificationColumnDisplayProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: NotificationColumnType;
};

type NotificationFilterOptionsEntry = {
  notificationType: NotificationType;
  title: string;
  icon: JSX.Element;
};

const NotificationTypeKindsMap: Record<NotificationType, number[]> = {
  Replies: [1],
  Repost: [6],
  Reaction: [7],
  Zap: [9735],
};

const NotificationSettingsSection = (props: RenderOtherSettingsProps<NotificationColumnType>) => {
  const i18n = useTranslation();

  const notificationFilterOptions: NotificationFilterOptionsEntry[] = [
    {
      notificationType: 'Replies',
      title: i18n.t('column.notificationSettings.types.replies'),
      icon: <AtSymbol />,
    },
    {
      notificationType: 'Repost',
      title: i18n.t('column.notificationSettings.types.reposts'),
      icon: <ArrowPathRoundedSquare />,
    },
    {
      notificationType: 'Reaction',
      title: i18n.t('column.notificationSettings.types.reactions'),
      icon: <HeartSolid />,
    },
    {
      notificationType: 'Zap',
      title: i18n.t('column.notificationSettings.types.zap'),
      icon: <Bolt />,
    },
  ] as const;

  const currentNotificationTypes = (): NotificationType[] =>
    props.column.notificationTypes ?? [...NotificationTypes];

  const isNotificationTypeSelected = (notificationType: NotificationType) =>
    currentNotificationTypes().includes(notificationType);

  const toggleColumnType = (notificationType: NotificationType) => {
    const notificationTypes = [...currentNotificationTypes()];
    if (isNotificationTypeSelected(notificationType)) {
      notificationTypes.splice(notificationTypes.indexOf(notificationType), 1);
    } else {
      notificationTypes.push(notificationType);
    }

    props.saveColumn({
      ...props.column,
      notificationTypes,
    });
  };

  return (
    <>
      <ColumnSettingsSection title={i18n.t('column.notificationSettings.notificationTypes')}>
        <div class="flex gap-1">
          <For each={notificationFilterOptions}>
            {({ notificationType, title, icon }) => (
              <button
                type="button"
                class="flex flex-1 flex-col items-center rounded-md border py-1 text-fg-secondary"
                title={title}
                classList={{
                  'border-fg-secondary': isNotificationTypeSelected(notificationType),
                  'font-bold': isNotificationTypeSelected(notificationType),
                  'border-border': !isNotificationTypeSelected(notificationType),
                  'font-normal': !isNotificationTypeSelected(notificationType),
                }}
                onClick={() => toggleColumnType(notificationType)}
              >
                <span class="inline-block size-4">{icon}</span>
                <span class="text-xs">{title}</span>
              </button>
            )}
          </For>
        </div>
      </ColumnSettingsSection>
    </>
  );
};

const NotificationColumn: Component<NotificationColumnDisplayProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const loadMore = useLoadMore(() => ({ duration: null }));

  const notificationTypes = () => props.column.notificationTypes ?? [];
  const kinds = () => uniq(notificationTypes().flatMap((type) => NotificationTypeKindsMap[type]));

  const { events: notifications, eose } = useSubscription(() =>
    kinds().length > 0
      ? {
          relayUrls: config().relayUrls,
          filters: [
            {
              kinds: kinds(),
              '#p': [props.column.pubkey],
              limit: 20,
              since: loadMore.since(),
              until: loadMore.until(),
            },
          ],
          eoseLimit: 20,
          clientEventFilter: (event) => {
            if (props.column.contentFilter == null) return true;
            return applyContentFilter(props.column.contentFilter)(event.content);
          },
        }
      : null,
  );

  createEffect(() => loadMore.setEvents(notifications()));

  return (
    <Column
      header={
        <BasicColumnHeader
          name={props.column.name ?? i18n.t('column.notification')}
          icon={<Bell />}
          settings={() => (
            <ColumnSettings
              column={props.column}
              columnIndex={props.columnIndex}
              renderOtherSettings={NotificationSettingsSection}
            />
          )}
          onClose={() => removeColumn(props.column.id)}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
    >
      <LoadMore loadMore={loadMore} eose={eose()}>
        <Notification events={notifications()} />
      </LoadMore>
    </Column>
  );
};

export default NotificationColumn;
