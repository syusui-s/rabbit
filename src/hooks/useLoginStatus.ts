import { Accessor } from 'solid-js';
import {
  createSignalWithStorage,
  createStorageWithSerializer,
} from '@/hooks/createSignalWithStorage';

type LoginStatus = {
  loggedIn: boolean;
};

type UseLoginStatus = {
  loginStatus: Accessor<LoginStatus>;
  loggedIn: () => void;
};

const InitialLoginStatus = {
  loggedIn: false,
};

const serializer = (loginStatus: LoginStatus): string => JSON.stringify(loginStatus);
// TODO zod使う
const deserializer = (json: string): LoginStatus => JSON.parse(json) as LoginStatus;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);

const [loginStatus, setLoginStatus] = createSignalWithStorage(
  'RabbitLoginStatus',
  InitialLoginStatus,
  storage,
);

const useLoginStatus = (): UseLoginStatus => {
  const loggedIn = () => {
    setLoginStatus((current) => ({ ...current, loggedIn: true }));
  };

  return { loginStatus, loggedIn };
};

export default useLoginStatus;
