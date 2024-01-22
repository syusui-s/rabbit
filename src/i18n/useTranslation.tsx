import { Component, JSX, createContext, createEffect, createSignal, useContext } from 'solid-js';

import i18next, { type i18n } from 'i18next';

export type I18NextProviderProps = {
  i18next: i18n | Promise<i18n>;
  children?: JSX.Element;
};

const I18NextContext = createContext<i18n>(i18next);

export const useTranslation = () => useContext<i18n>(I18NextContext);

export const I18NextProvider: Component<I18NextProviderProps> = (props) => {
  const [i18nextInstance, setI18nextInstance] = createSignal<i18n>(i18next);

  createEffect(() => {
    if (props.i18next instanceof Promise) {
      props.i18next
        .then((instance) => {
          if (instance != null) {
            setI18nextInstance(instance);
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
