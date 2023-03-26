import { createStore } from 'solid-js/store';

export type Stats = {
  activeSubscriptions: number;
  activeBatchSubscriptions: number;
};

const [stats, setStats] = createStore<Stats>({
  activeSubscriptions: 0,
  activeBatchSubscriptions: 0,
});

const useStats = () => {
  const setActiveSubscriptions = (count: number) => setStats('activeSubscriptions', count);

  const setActiveBatchSubscriptions = (count: number) =>
    setStats('activeBatchSubscriptions', count);

  return {
    stats,
    setActiveSubscriptions,
    setActiveBatchSubscriptions,
  };
};

export default useStats;
