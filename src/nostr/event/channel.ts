import { z } from 'zod';

const ChannelMetaSchema = z.object({
  name: z.string(),
  about: z.string().optional(),
  picture: z.string().url().optional(),
});

export type ChannelMeta = z.infer<typeof ChannelMetaSchema>;

export const parseChannelMeta = (content: string): ChannelMeta => {
  try {
    return ChannelMetaSchema.parse(JSON.parse(content));
  } catch (err) {
    throw new TypeError('failed to parse ChannelMeta schema: ', { cause: err });
  }
};
