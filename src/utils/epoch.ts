export const toEpoch = (date: Date) => Math.floor(+date / 1000);

const epoch = (): number => toEpoch(new Date());

export default epoch;
