import { Accessor } from 'solid-js';

import {
  createStoreWithStorage,
  createStorageWithSerializer,
} from '@/hooks/createSignalWithStorage';
import { UploaderIds } from '@/utils/imageUpload';

type PersistStatus = {
  loggedIn: boolean;
  agreements: Record<UploaderIds, boolean>;
};

type UsePersistStatus = {
  persistStatus: Accessor<PersistStatus>;
  loggedIn: () => void;
  agreeToToS: (uploaderId: UploaderIds) => void;
  didAgreeToToS: (uploaderId: UploaderIds) => boolean;
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

const [persistStatus, setPersistStatus] = createStoreWithStorage(
  'RabbitPersistStatus',
  InitialPersistStatus,
  storage,
);

const usePersistStatus = (): UsePersistStatus => {
  const loggedIn = () => {
    setPersistStatus((current) => ({ ...current, loggedIn: true }));
  };

  const agreeToToS = (key: UploaderIds) => {
    setPersistStatus('agreements', (current) => ({ ...current, [key]: true }));
  };

  const didAgreeToToS = (key: UploaderIds): boolean => persistStatus.agreements[key] ?? false;

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
