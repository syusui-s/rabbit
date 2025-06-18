import { type z } from 'zod';

const ensureSchema =
  <T>(schema: z.Schema<T>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (value: any): value is T =>
    schema.safeParse(value).success;

export default ensureSchema;
