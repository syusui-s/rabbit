import { useRequestMessage, useHandleMessage } from '@/hooks/useMessageBus';

type UseHandleCommandProps = {
  commandType: string;
  handler: (command: Command) => void;
};

type CommandBase<T> = { command: T };

export type OpenPostForm = CommandBase<'openPostForm'> & { content?: string };
export type ClosePostForm = CommandBase<'closePostForm'>;
export type MoveToNextItem = CommandBase<'moveToNextItem'>;
export type MoveToPrevItem = CommandBase<'moveToPrevItem'>;
export type MoveToPrevColumn = CommandBase<'moveToPrevColumn'>;
export type MoveToNextColumn = CommandBase<'moveToNextColumn'>;
export type MoveToColumn = CommandBase<'moveToColumn'> & { columnIndex: number };
export type MoveToLastColumn = CommandBase<'moveToLastColumn'>;
export type Like = CommandBase<'like'>;
export type Repost = CommandBase<'repost'>;
export type OpenReplyForm = CommandBase<'openReplyForm'>;
export type OpenHelp = CommandBase<'openHelp'>;
export type OpenItemDetail = CommandBase<'openItemDetail'>;
export type CloseItemDetail = CommandBase<'closeItemDetail'>;

export type Command =
  | OpenPostForm
  | ClosePostForm
  | MoveToNextItem
  | MoveToPrevItem
  | MoveToPrevColumn
  | MoveToNextColumn
  | MoveToColumn
  | MoveToLastColumn
  | Like
  | Repost
  | OpenReplyForm
  | OpenHelp
  | OpenItemDetail
  | CloseItemDetail;

export type CommandType = Command['command'];

export const useRequestCommand = () =>
  useRequestMessage<Command, void>(() => ({ id: 'CommandChannel' }));

export const useHandleCommand = (propsProvider: () => UseHandleCommandProps) => {
  useHandleMessage<Command, void>(() => ({
    id: 'CommandChannel',
    handler: (command) => {
      const { commandType, handler } = propsProvider();
      if (command.command === commandType) {
        handler(command);
      }
    },
  }));
};
