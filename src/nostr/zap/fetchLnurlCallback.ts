import { type Event as NostrEvent } from 'nostr-tools/pure';
import { z } from 'zod';

import { LnurlErrorSchema, type LnurlError } from '@/nostr/zap/common';
import lnurlPayUrlToLud06 from '@/nostr/zap/lnurlPayUrlToLud06';
import ensureSchema from '@/utils/ensureSchema';

const LnurlCallbackSchema = z.object({
  pr: z.string(),
  routes: z.array(z.any()).length(0),
});

export type FetchLnurlCallbackParams = {
  callback: string;
  lnurlPayUrl: string;
  amountMilliSats: string;
  comment?: string;
  zapRequest?: NostrEvent;
};

export type LnurlCallback = z.infer<typeof LnurlCallbackSchema>;

const fetchLnurlCallback = async ({
  callback,
  lnurlPayUrl,
  amountMilliSats,
  comment,
  zapRequest,
}: FetchLnurlCallbackParams): Promise<LnurlCallback | LnurlError> => {
  const callbackUrl = new URL(callback);

  callbackUrl.searchParams.set('amount', amountMilliSats.toString());

  callbackUrl.searchParams.set('lnurl', lnurlPayUrlToLud06(lnurlPayUrl));

  if (comment != null && comment.length > 0) {
    callbackUrl.searchParams.set('comment', comment);
  }
  if (zapRequest != null) {
    callbackUrl.searchParams.set('nostr', JSON.stringify(zapRequest));
  }

  const res = await fetch(callbackUrl, { mode: 'cors' });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = await res.json();

  if (ensureSchema(LnurlErrorSchema)(body)) return body;

  if (!ensureSchema(LnurlCallbackSchema)(body)) {
    throw new Error('invalid form of callback response');
  }

  return body;
};

export default fetchLnurlCallback;
