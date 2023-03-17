import useConfig from '@/nostr/useConfig';

import useDatePulser from '@/hooks/useDatePulser';

import { formatRelative, formatAbsoluteLong, formatAbsoluteShort } from '@/utils/formatDate';

const useFormatDate = () => {
  const { config } = useConfig();
  const currentDate = useDatePulser();

  return (date: Date) => {
    switch (config().dateFormat) {
      case 'absolute-long':
        return formatAbsoluteLong(date, currentDate());
      case 'absolute-short':
        return formatAbsoluteShort(date, currentDate());
      case 'relative':
        return formatRelative(date, currentDate());
      default:
        return formatRelative(date, currentDate());
    }
  };
};

export default useFormatDate;
