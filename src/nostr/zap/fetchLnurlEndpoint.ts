import { z } from 'zod';

import isValidId from '@/nostr/event/isValidId';
import { LnurlErrorSchema, type LnurlError } from '@/nostr/zap/common';
import ensureSchema from '@/utils/ensureSchema';

const RawLnurlEndpointMetadataKnownFieldsSchema = z.union([
  z.tuple([z.literal('text/plain'), z.string()]),
  z.tuple([z.literal('text/long-desc'), z.string()]),
  z.tuple([z.literal('image/png;base64'), z.string()]),
  z.tuple([z.literal('image/jpeg;base64'), z.string()]),
  // lud16 identifier
  z.tuple([z.literal('text/identifier'), z.string()]),
]);

type RawLnurlEndpointMetadataKnownFields = z.infer<
  typeof RawLnurlEndpointMetadataKnownFieldsSchema
>;

const RawLnurlEndpointMetadataSchema = z
  .array(z.union([RawLnurlEndpointMetadataKnownFieldsSchema, z.tuple([z.string(), z.any()])]))
  .refine((metadata) => metadata.findIndex(([key]) => key === 'text/plain') >= 0);

export type RawLnurlEndpointMetadata = z.infer<typeof RawLnurlEndpointMetadataSchema>;

type LnurlEndpointMetadata = {
  textPlain: string;
  textLongDesc?: string;
  imagePNG?: string;
  imageJPEG?: string;
  identifier?: string;
  rest: [string, string][];
};

const LnurlEndpointSchema = z.object({
  // lud06 fields
  callback: z.string().nonempty(),
  maxSendable: z.number().positive(),
  minSendable: z.number().positive(),
  metadata: z.string(),
  tag: z.literal('payRequest'),
  // nostr NIP-57 fields
  allowsNostr: z.optional(z.boolean()),
  nostrPubkey: z.optional(z.string().refine(isValidId)),
  // lud12 comment
  commentAllowed: z.optional(z.number()),
});

export type LnurlEndpoint = z.infer<typeof LnurlEndpointSchema> & {
  decodedMetadata: LnurlEndpointMetadata;
};

export const parseLnurlEndpointMetadata = (
  metadataString: string,
): LnurlEndpointMetadata | null => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const metadata = JSON.parse(metadataString);
    if (!ensureSchema(RawLnurlEndpointMetadataSchema)(metadata)) return null;

    const rest = [...metadata];
    const findAndRemove = <T extends RawLnurlEndpointMetadataKnownFields>(
      key: T[0],
    ): T[1] | undefined => {
      const index = rest.findIndex(([k]) => k === key);
      if (index < 0) return undefined;
      const tuple = rest[index] as T;
      rest.splice(index, 1);
      return tuple[1];
    };

    const textPlain = findAndRemove<['text/plain', string]>('text/plain');
    if (textPlain == null) return null;

    const textLongDesc = findAndRemove('text/long-desc');
    const imagePNG = findAndRemove('image/png;base64');
    const imageJPEG = findAndRemove('image/jpeg;base64');
    const identifier = findAndRemove('text/identifier');

    return { textPlain, textLongDesc, imagePNG, imageJPEG, identifier, rest };
  } catch {
    return null;
  }
};

const fetchLnurlEndpoint = async (lnurl: string): Promise<LnurlEndpoint | LnurlError> => {
  const res = await fetch(lnurl, { mode: 'cors', redirect: 'error' });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = await res.json();
  if (ensureSchema(LnurlErrorSchema)(body)) return body;

  if (!ensureSchema(LnurlEndpointSchema)(body)) {
    throw new Error('invalid form of endpoint response');
  }

  const decodedMetadata = parseLnurlEndpointMetadata(body.metadata);
  if (decodedMetadata == null) {
    throw new Error('invalid form of metadata');
  }

  return { ...body, decodedMetadata };
};

export default fetchLnurlEndpoint;
