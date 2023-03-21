import { createSignal, createEffect, onMount, type Signal } from 'solid-js';
import { createStore, SetStoreFunction, type Store, type StoreNode } from 'solid-js/store';

type GenericStorage<T> = {
  getItem(key: string): T | null;
  setItem(key: string, value: T): void;
};

export const createStorageWithSerializer = <T>(
  storageProvider: () => Storage,
  serializer: (v: T) => string,
  deserializer: (v: string) => T | null,
): GenericStorage<T> => {
  const storage: Storage = storageProvider();

  return {
    getItem(key: string): T | null {
      const data = storage.getItem(key);
      return data != null ? deserializer(data) : null;
    },
    setItem(key: string, value: T) {
      const data = serializer(value);
      storage.setItem(key, data);
    },
  };
};

export const createSignalWithStorage = <T>(
  key: string,
  initialValue: T,
  storage: GenericStorage<T>,
): Signal<T> => {
  const [loaded, setLoaded] = createSignal<boolean>(false);
  const [state, setState] = createSignal(initialValue);

  onMount(() => {
    const data = storage.getItem(key);
    // If there is no data, default value is used.
    if (data != null) setState(() => data);
    setLoaded(true);
  });

  createEffect(() => {
    if (loaded()) storage.setItem(key, state());
  });

  return [state, setState];
};

export const createStoreWithStorage = <T extends StoreNode>(
  key: string,
  initialValue: T,
  storage: GenericStorage<T>,
): [Store<T>, SetStoreFunction<T>] => {
  const [loaded, setLoaded] = createSignal<boolean>(false);
  const [state, setState] = createStore<T>(initialValue);

  onMount(() => {
    const data = storage.getItem(key);
    // If there is no data, default value is used.
    if (data != null) setState(data);
    setLoaded(true);
  });

  createEffect(() => {
    if (loaded()) storage.setItem(key, state);
  });

  return [state, setState];
};
