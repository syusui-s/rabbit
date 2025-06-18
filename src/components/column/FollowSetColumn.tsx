import { type Component, createSignal } from 'solid-js';

import Users from 'heroicons/24/outline/users.svg';
import uniq from 'lodash/uniq';
import * as Kind from 'nostr-tools/kinds';
import { naddrEncode } from 'nostr-tools/nip19';

import BasicColumnHeader from '@/components/column/BasicColumnHeader';
import Column, { type ColumnOperator } from '@/components/column/Column';
import ColumnInfo from '@/components/column/ColumnInfo';
import ColumnSettings from '@/components/column/ColumnSettings';
import LoadMore, { useLoadMore } from '@/components/column/LoadMore';
import Timeline from '@/components/timeline/Timeline';
import { type FollowSetColumnType } from '@/core/column';
import { applyContentFilter } from '@/core/contentFilter';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import useFollowSet from '@/nostr/useFollowSet';
import useSubscription from '@/nostr/useSubscription';

type FollowingColumnProps = {
  columnIndex: number;
  lastColumn: boolean;
  column: FollowSetColumnType;
};

export type FollowSetInfoProps = {
  author: string;
  identifier: string;
  image?: string;
  title?: string;
  description?: string;
};

const FollowSetInfo: Component<FollowSetInfoProps> = (props) => {
  const i18n = useTranslation();

  const naddr = () =>
    naddrEncode({
      pubkey: props.author,
      identifier: props.identifier,
      kind: Kind.Followsets,
    });

  const otherActionMenuItems = [
    {
      content: i18n.t('column.columnInfoCommon.copyId'),
      onSelect: () => {
        navigator.clipboard.writeText(naddr()).catch((err) => window.alert(err));
      },
    },
  ];

  return (
    <ColumnInfo
      image={props.image}
      authorPubkey={props.author}
      title={props.title ?? props.identifier}
      description={props.description}
      otherActionMenuItems={otherActionMenuItems}
    />
  );
};

const FollowingColumn: Component<FollowingColumnProps> = (props) => {
  const i18n = useTranslation();
  const { config, removeColumn } = useConfig();

  const [columnOperator, setColumnOperator] = createSignal<ColumnOperator>();

  const { followSet, image, title, description, pubkeys } = useFollowSet(() => ({
    author: props.column.author,
    identifier: props.column.identifier,
  }));

  const columnName = () =>
    props.column.name || title() || followSet()?.identifier() || i18n.t('column.followSet');

  const loadMore = useLoadMore(() => ({ duration: null }));

  const { events, eose } = useSubscription(() => {
    const authors = uniq([...pubkeys()]);
    if (authors.length === 0) return null;
    return {
      debugId: 'following',
      relayUrls: config().relayUrls,
      filters: [
        {
          kinds: [1, 6],
          authors,
          limit: 20,
          since: loadMore.since(),
          until: loadMore.until(),
        },
      ],
      eoseLimit: 20,
      continuous: loadMore.continuous(),
      onEOSE: () => {
        console.log('home: eose');
      },
      clientEventFilter: (event) => {
        if (props.column.contentFilter == null) return true;
        return applyContentFilter(props.column.contentFilter)(event.content);
      },
    };
  });

  return (
    <Column
      header={
        <BasicColumnHeader
          name={columnName()}
          icon={<Users />}
          settings={() => (
            <>
              <FollowSetInfo
                author={props.column.author}
                identifier={props.column.identifier}
                image={image()}
                title={title()}
                description={description()}
              />
              <ColumnSettings column={props.column} columnIndex={props.columnIndex} />
            </>
          )}
          onClose={() => removeColumn(props.column.id)}
          onClickHeader={() => columnOperator()?.scrollToTop()}
        />
      }
      width={props.column.width}
      columnIndex={props.columnIndex}
      lastColumn={props.lastColumn}
      columnOperatorRef={setColumnOperator}
    >
      <LoadMore loadMore={loadMore} eose={eose()}>
        <Timeline events={events()} />
      </LoadMore>
    </Column>
  );
};

export default FollowingColumn;
