import { createSignal, createEffect, onCleanup, type Accessor } from 'solid-js';

type DatePulserProps = {
  interval: number;
};

const useDatePulser = (propsProvider: () => DatePulserProps): Accessor<Date> => {
  const [currentDate, setCurrentDate] = createSignal(new Date());

  createEffect(() => {
    const id = setInterval(() => {
      setCurrentDate(new Date());
    }, propsProvider().interval);

    onCleanup(() => clearInterval(id));
  });

  return currentDate;
};

export default useDatePulser;
