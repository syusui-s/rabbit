import { createSignal, type Accessor } from 'solid-js';

const [currentDate, setCurrentDate] = createSignal(new Date());

// 7 seconds is used for the interval so that the last digit of relative time is changed.
setInterval(() => {
  setCurrentDate(new Date());
}, 7000);

const useDatePulser = (): Accessor<Date> => {
  return currentDate;
};

export default useDatePulser;
