import { createSignal, type Accessor } from 'solid-js';

const [currentDate, setCurrentDate] = createSignal(new Date());

setInterval(() => {
  setCurrentDate(new Date());
}, 7000);

const useDatePulser = (): Accessor<Date> => {
  return currentDate;
};

export default useDatePulser;
