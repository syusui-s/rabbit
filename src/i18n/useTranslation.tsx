import { Component, JSX, createContext, createEffect, createSignal, useContext } from 'solid-js';

import i18next from 'i18next';

type I18Next = typeof i18next;

export type I18NextProviderProps = {
  i18next: I18Next | Promise<I18Next | void> | void;
  children?: JSX.Element;
};

const I18NextContext = createContext<I18Next>(i18next);

export const useTranslation = () => useContext<I18Next>(I18NextContext);

export const I18NextProvider: Component<I18NextProviderProps> = (props) => {
  const [i18nextInstance, setI18nextInstance] = createSignal<I18Next>(i18next);

  createEffect(() => {
    if (props.i18next instanceof Promise) {
      props.i18next
        .then((instance) => {
          if (instance != null) {
            setI18nextInstance(() => instance);
          }
        })
        .catch((err) => {
          console.error('failed to initialize i18n.text', err);
        });
    } else if (props.i18next != null) {
      setI18nextInstance(props.i18next);
    }
  });

  return (
    <I18NextContext.Provider value={i18nextInstance()}>{props.children}</I18NextContext.Provider>
  );
};
