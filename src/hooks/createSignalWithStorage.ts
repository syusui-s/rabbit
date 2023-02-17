import { createSignal, createEffect, onMount, Accessor, Setter } from 'solid-js';

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
): [Accessor<T>, Setter<T>] => {
  const [loaded, setLoaded] = createSignal<boolean>(false);
  const [value, setValue] = createSignal<T>(initialValue);

  onMount(() => {
    const data = storage.getItem(key);
    // If there is no data, default value is used.
    if (data != null) setValue(() => data);
    setLoaded(true);
  });

  createEffect(() => {
    if (loaded()) storage.setItem(key, value());
  });

  return [value, setValue];
};
