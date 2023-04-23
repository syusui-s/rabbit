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

const InitialPersistStatus = {
  loggedIn: false,
  agreeWithNostrBuild: false,
};

const serializer = (persistStatus: PersistStatus): string => JSON.stringify(persistStatus);
// TODO zod使う
const deserializer = (json: string): PersistStatus => JSON.parse(json) as PersistStatus;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);

const [persistStatus, setPersistStatus] = createSignalWithStorage(
  'RabbitPersistStatus',
  InitialPersistStatus,
  storage,
);

const usePersistStatus = (): UsePersistStatus => {
  const loggedIn = () => {
    setPersistStatus((current) => ({ ...current, loggedIn: true }));
  };

  return {
    persistStatus: () => ({
      ...InitialPersistStatus,
      ...persistStatus(),
    }),
    loggedIn,
  };
};

export default usePersistStatus;
