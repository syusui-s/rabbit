/**
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org/>
 */
import uniqBy from 'lodash/uniqBy';
import { z } from 'zod';

export const pubkeySchema = z
  .string()
  .length(64)
  .regex(/^[0-9a-f]{64}$/);

export const shortcodeSchema = z.string().regex(/^\w+$/);

export const emojiSchema = z.object({
  shortcode: shortcodeSchema,
  url: z.string().url(),
  keywords: z.optional(z.array(shortcodeSchema)),
});

export const emojiPackSchemaV1 = z
  .object({
    manifest: z.literal('emojipack_v1'),
    name: z.string(),
    emojis: z.array(emojiSchema),
    description: z.optional(z.string()),
    author: z.optional(pubkeySchema),
    publisher: z.optional(pubkeySchema),
  })
  .refine(
    (emojiPack) => {
      // check uniqueness of shortcodes
      const uniqEmojis = uniqBy(emojiPack.emojis, (emoji) => emoji.shortcode).length;
      return uniqEmojis === emojiPack.emojis.length;
    },
    { message: 'shortcodes should be unique' },
  );

export const simpleEmojiPackSchema = z.record(shortcodeSchema, z.string().url());

export const allEmojiPackSchema = emojiPackSchemaV1.or(simpleEmojiPackSchema);

export type Emoji = z.infer<typeof emojiSchema>;

export type EmojiPackV1 = z.infer<typeof emojiPackSchemaV1>;

export type SimpleEmojiPack = z.infer<typeof simpleEmojiPackSchema>;

export type AllEmojiPack = z.infer<typeof allEmojiPackSchema>;

export const getEmojiPack = async (urlString: string): Promise<AllEmojiPack> => {
  const url = new URL(urlString);
  const res = await fetch(url);
  return allEmojiPackSchema.parseAsync(await res.json());
};
