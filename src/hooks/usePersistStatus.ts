import { createRoot, type Accessor } from 'solid-js';

import {
  createStoreWithStorage,
  createStorageWithSerializer,
} from '@/hooks/createSignalWithStorage';

type PersistStatus = {
  loggedIn: boolean;
  agreements: Record<string, boolean>;
};

type UsePersistStatus = {
  persistStatus: Accessor<PersistStatus>;
  loggedIn: () => void;
  agreeToToS: (hostname: string) => void;
  didAgreeToToS: (hostname: string) => boolean;
};

const InitialPersistStatus: PersistStatus = {
  loggedIn: false,
  agreements: {
    nostrBuild: false,
  },
};

const serializer = (persistStatus: PersistStatus): string => JSON.stringify(persistStatus);
// TODO zod使う
const deserializer = (json: string): PersistStatus => JSON.parse(json) as PersistStatus;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);

const [persistStatus, setPersistStatus] = createRoot(() =>
  createStoreWithStorage('RabbitPersistStatus', InitialPersistStatus, storage),
);

const usePersistStatus = (): UsePersistStatus => {
  const loggedIn = () => {
    setPersistStatus((current) => ({ ...current, loggedIn: true }));
  };

  const agreeToToS = (hostname: string) => {
    setPersistStatus('agreements', (current) => ({ ...current, [hostname]: true }));
  };

  const didAgreeToToS = (hostname: string): boolean => persistStatus.agreements[hostname] ?? false;

  return {
    persistStatus: () => ({
      ...InitialPersistStatus,
      ...persistStatus,
    }),
    loggedIn,
    agreeToToS,
    didAgreeToToS,
  };
};

export default usePersistStatus;
