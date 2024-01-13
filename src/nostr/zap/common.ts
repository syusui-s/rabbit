import { z } from 'zod';

export const LnurlErrorSchema = z.object({
  status: z.literal('ERROR'),
  reason: z.string(),
});

export type LnurlError = z.infer<typeof LnurlErrorSchema>;
