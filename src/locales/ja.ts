export default {
  general: {
    loading: '読み込み中',
    updating: '更新中',
  },
  posting: {
    placeholder: 'いまどうしてる？',
    contentWarning: 'コンテンツ警告を設定',
    uploadImage: '画像を投稿',
    submit: '投稿',
  },
  column: {
    home: 'ホーム',
    notification: '通知',
    relay: 'リレー',
    japanese: '日本語',
    posts: '投稿',
    reactions: 'リアクション',
    channel: 'チャンネル',
    bookmark: 'ブックマーク',
    search: '検索',
    myPosts: '自分の投稿',
    myReactions: '自分のリアクション',
    config: {
      columnWidth: 'カラム幅',
      widest: '特大',
      wide: '大',
      medium: '中',
      narrow: '小',
      moveLeft: '左に移動',
      moveRight: '右に移動',
      removeColumn: '削除',
    },
  },
  profile: {
    following: 'フォロー',
    followers: 'フォロワー',
    loadFollowers: '読み込む',
    editProfile: '編集',
    follow: 'フォロー',
    unfollow: 'フォロー解除',
    followingCurrently: 'フォロー中',
    followsYou: 'フォローされています',
    copyPubkey: 'IDをコピー',
    mute: 'ミュート',
    unmute: 'ミュート解除',
    followMyself: '自分をフォロー',
    unfollowMyself: '自分をフォロー解除',
  },
  post: {
    replyToPre: '',
    replyToPost: 'への返信',
    copyEventId: 'IDをコピー',
    showJSON: 'JSONを確認',
    showReposts: 'リポスト一覧',
    showReactions: 'リアクション一覧',
    deletePost: '削除',
    confirmDelete: '本当に削除しますか？',
    deletedSuccessfully: '削除しました（画面への反映にはリロード）',
    failedToDeletePartially: '{{count}}個のリレーで削除に失敗しました',
    failedToDelete: 'すべてのリレーで削除に失敗しました',
  },
  notification: {
    reposted: 'がリポスト',
    reacted: 'がリアクション',
  },
  config: {
    config: '設定',
    profile: {
      profile: 'プロフィール',
      openProfile: '開く',
      editProfile: '編集',
    },
    relays: {
      relays: 'リレー',
      numOfRelays_one: '{{count}}個のリレーが設定されています。',
      numOfRelays_other: '{{count}}個のリレーが設定されています。',
      addRelay: '追加',
      importRelays: 'インポート',
      importFromExtension: '拡張機能からインポート',
      notConfigured: 'リレーが設定されていません',
      askImport: 'これらのリレーをインポートしますか？',
      failedToImport: 'インポートに失敗しました',
      imported_one: '{{count}}個のリレーをインポートしました',
      imported_other: '{{count}}個のリレーをインポートしました',
    },
    display: {
      display: '表示',
      timeNotation: '時刻の表記',
      relativeTimeNotation: '相対表記',
      relativeTimeNotationExample: '7秒前',
      absoluteTimeNotationShort: '絶対表記 (短形式)',
      absoluteTimeNotationShortExample: '昨日 23:55',
      absoluteTimeNotationLong: '絶対表記 (長形式)',
      absoluteTimeNotationLongExample: '2020/11/8 21:02:53',
      reaction: 'リアクション',
      enableEmojiReaction: '絵文字を選べるようにする',
      showEmojiReaction: '投稿にリアクションされた絵文字を表示する',
      others: 'その他',
      keepOpenPostForm: '投稿後も投稿欄を開いたままにする',
      showMediaByDefault: 'デフォルトで画像や動画を読み込む',
      hideNumbers: 'いいねやリポスト、フォロワーなどの数を隠す',
    },
    customEmoji: {
      customEmoji: 'カスタム絵文字',
      shortcode: '名前',
      url: 'URL',
      addEmoji: '追加',
      emojiImport: '絵文字のインポート',
      emojiImportDescription:
        '絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。',
      importEmoji: 'インポート',
    },
    mute: {
      mute: 'ミュート',
      mutedUsers: 'ミュートしたユーザ',
      mutedKeywords: 'ミュートした単語',
      add: '追加',
    },
  },
  hello: {
    signerChecking: '拡張機能のインストール状況を確認中です...',
    signerUnavailable: '利用にはNIP-07に対応した拡張機能が必要です。',
    loginWithSigner: 'NIP-07 拡張機能でログイン',
  },
};
