import useCachedEvents from '@/clients/useCachedEvents';

type UseEventProps = {
  relayUrls: string[];
  eventId: string;
};

const useEvent = (propsProvider: () => UseEventProps) => {
  const query = useCachedEvents(() => {
    const { relayUrls, eventId } = propsProvider();
    return {
      relayUrls,
      filters: [
        {
          ids: [eventId],
          kinds: [1],
          limit: 1,
        },
      ],
    };
  });

  const event = () => query.data?.[0];

  return { event };
};

export default useEvent;
