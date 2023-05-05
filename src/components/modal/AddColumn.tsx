import BasicModal from '@/components/modal/BasicModal';
import useConfig from '@/core/useConfig';

const AddColumn = () => {
  const { addColumn } = useConfig();

  return (
    <BasicModal onClose={() => console.log('closed')}>
      <ul>
        <li>ホーム</li>
        <li>通知</li>
        <li>検索</li>
        <li>リレー</li>
        <li>ユーザー</li>
        <li>いいね</li>
        <li>ダイレクトメッセージ</li>
      </ul>
    </BasicModal>
  );
};

export default AddColumn;
