import { type Event as NostrEvent } from 'nostr-tools/pure';

import { parseBolt11 } from '@/nostr/zap/bolt11';
import sha256Hex from '@/utils/sha256Hex';

const verifyInvoice = async (
  bolt11: string,
  requirements: { amountMilliSats: string; metadata: string; zapRequest?: NostrEvent },
): Promise<void> => {
  const payReq = parseBolt11(bolt11);

  const description =
    requirements.zapRequest != null
      ? JSON.stringify(requirements.zapRequest)
      : requirements.metadata;

  if (payReq.tagsObject.description !== null && description === payReq.tagsObject.description) {
    throw new Error("invalid invoice: description and didn't match");
  }

  const purposeCommitHash = await sha256Hex(description);
  if (purposeCommitHash !== payReq.tagsObject.purpose_commit_hash) {
    throw new Error("invalid invoice: hash value of purpose_commit_hash and didn't match");
  }

  if (payReq.millisatoshis != null && payReq.millisatoshis !== requirements.amountMilliSats) {
    throw new Error("invalid invoice: amount didn't match");
  }
};

export default verifyInvoice;
