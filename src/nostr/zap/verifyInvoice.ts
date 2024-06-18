import { parseBolt11 } from '@/nostr/zap/bolt11';

const verifyInvoice = (bolt11: string, requirements: { amountMilliSats: string }) => {
  const payReq = parseBolt11(bolt11);

  if (payReq.millisatoshis != null && payReq.millisatoshis !== requirements.amountMilliSats) {
    throw new Error("invalid invoice: amount didn't match");
  }
};

export default verifyInvoice;
