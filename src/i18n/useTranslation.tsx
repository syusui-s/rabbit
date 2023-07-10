import { Component, JSX, createContext, createEffect, createSignal, useContext } from 'solid-js';

import i18next from 'i18next';

type I18Next = typeof i18next.t;

export type I18NextProviderProps = {
  i18next: I18Next | Promise<I18Next | void> | void;
  children?: JSX.Element;
};

const I18NextContext = createContext<I18Next | Promise<I18Next | void> | void>();

export const useTranslation = () => {
  const [i18nextFn, setI18nextFn] = createSignal<I18Next>(i18next.t);
  const maybePromise = useContext(I18NextContext);

  createEffect(() => {
    if (maybePromise instanceof Promise) {
      maybePromise
        .then((instance) => {
          if (instance != null) {
            setI18nextFn(() => instance);
          }
        })
        .catch((err) => {
          console.error('failed to initialize i18next', err);
        });
    } else if (maybePromise != null) {
      setI18nextFn(() => maybePromise);
    }
  });

  return i18nextFn;
};

export const I18NextProvider: Component<I18NextProviderProps> = (props) => (
  <I18NextContext.Provider value={props.i18next}>{props.children}</I18NextContext.Provider>
);
