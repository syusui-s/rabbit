import { z } from 'zod';

const ensureSchema =
  <T>(schema: z.Schema<T>) =>
  (value: any): value is T =>
    schema.safeParse(value).success;

export default ensureSchema;
