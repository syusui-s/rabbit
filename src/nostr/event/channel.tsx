import { z } from 'zod';

import { isImageUrl } from '@/utils/imageUrl';

const ChannelMetaSchema = z.object({
  name: z.string(),
  about: z.string().optional(),
  picture: z
    .string()
    .url()
    .refine((url) => isImageUrl(url), { message: 'not an image url' })
    .optional(),
});

export type ChannelMeta = z.infer<typeof ChannelMetaSchema>;

export const parseChannelMeta = (content: string): ChannelMeta => {
  try {
    return ChannelMetaSchema.parse(JSON.parse(content));
  } catch (err) {
    throw new TypeError('failed to parse ChannelMeta schema: ', { cause: err });
  }
};
