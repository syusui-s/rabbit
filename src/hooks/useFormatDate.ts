import useConfig from '@/core/useConfig';
import useDatePulser from '@/hooks/useDatePulser';
import { formatRelative, formatAbsoluteLong, formatAbsoluteShort } from '@/utils/formatDate';

// 7 seconds is used here so that the last digit of relative time is changed.
const currentDateHigh = useDatePulser(() => ({ interval: 7000 }));
const currentDateLow = useDatePulser(() => ({ interval: 60 * 1000 }));

const useFormatDate = () => {
  const { config } = useConfig();

  return (date: Date) => {
    switch (config().dateFormat) {
      case 'absolute-long':
        return formatAbsoluteLong(date, currentDateLow());
      case 'absolute-short':
        return formatAbsoluteShort(date, currentDateLow());
      case 'relative':
        return formatRelative(date, currentDateHigh());
      default:
        return formatRelative(date, currentDateHigh());
    }
  };
};

export default useFormatDate;
