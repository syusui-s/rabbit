import { Accessor } from 'solid-js';
import {
  createSignalWithStorage,
  createStorageWithSerializer,
} from '@/hooks/createSignalWithStorage';

type PersistStatus = {
  loggedIn: boolean;
  agreeWithNostrBuild: boolean;
};

type UsePersistStatus = {
  persistStatus: Accessor<PersistStatus>;
  loggedIn: () => void;
};

const InitialLoginStatus = {
  loggedIn: false,
  agreeWithNostrBuild: false,
};

const serializer = (persistStatus: PersistStatus): string => JSON.stringify(persistStatus);
// TODO zod使う
const deserializer = (json: string): PersistStatus => JSON.parse(json) as PersistStatus;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);

const [persistStatus, setLoginStatus] = createSignalWithStorage(
  'RabbitLoginStatus',
  InitialLoginStatus,
  storage,
);

const usePersistStatus = (): UsePersistStatus => {
  const loggedIn = () => {
    setLoginStatus((current) => ({ ...current, loggedIn: true }));
  };

  return {
    persistStatus: () => ({
      get loggedIn() {
        return persistStatus().loggedIn ?? false;
      },
      get agreeWithNostrBuild() {
        return persistStatus().agreeWithNostrBuild ?? false;
      },
    }),
    loggedIn,
  };
};

export default usePersistStatus;
