import lightningPayReq from 'bolt11';

export { type PaymentRequestObject } from 'bolt11';

export const parseBolt11 = (bolt11: string): ReturnType<typeof lightningPayReq.decode> =>
  lightningPayReq.decode(bolt11);
