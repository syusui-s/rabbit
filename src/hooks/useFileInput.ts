import { createSignal, type JSX } from 'solid-js';

const useFileInput = () => {
  const [file, setFile] = createSignal<File | undefined>();

  const handleChange: JSX.EventHandler<HTMLInputElement, Event> = (ev) => {
    setFile(ev.currentTarget.files?.[0]);
  };

  return { file, handleChange };
};
