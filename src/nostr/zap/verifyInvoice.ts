import { type Event as NostrEvent } from 'nostr-tools/pure';

import { parseBolt11 } from '@/nostr/zap/bolt11';
import sha256Hex from '@/utils/sha256Hex';

const verifyInvoice = async (
  bolt11: string,
  requirements: { amountMilliSats: string; metadata: string; zapRequest?: NostrEvent },
): Promise<boolean> => {
  const payReq = parseBolt11(bolt11);

  return (
    (requirements.zapRequest != null
      ? payReq.tagsObject.purpose_commit_hash ===
        (await sha256Hex(JSON.stringify(requirements.zapRequest)))
      : payReq.tagsObject.purpose_commit_hash === (await sha256Hex(requirements.metadata))) &&
    payReq.millisatoshis != null &&
    payReq.millisatoshis === requirements.amountMilliSats
  );
};

export default verifyInvoice;
