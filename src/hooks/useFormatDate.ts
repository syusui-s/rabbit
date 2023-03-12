import { createMemo } from 'solid-js';

import useConfig from '@/nostr/useConfig';

import useDatePulser from '@/hooks/useDatePulser';

import { formatRelative, formatAbsolute } from '@/utils/formatDate';

const useFormatDate = () => {
  const { config } = useConfig();
  const currentDate = useDatePulser();

  return (date: Date) => {
    if (config().dateFormat === 'absolute') {
      return formatAbsolute(date);
    }
    return formatRelative(date, currentDate());
  };
};

export default useFormatDate;
