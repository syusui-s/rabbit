import { type core, z } from 'zod';

// https://github.com/colinhacks/zod/issues/831
export const isZodLiteralsUnion = <T extends z.ZodLiteral<core.util.Literal>>(
  literals: T[],
): literals is [T, T, ...T[]] => literals.length >= 2;

export const literalsUnion = <T extends z.ZodLiteral<core.util.Literal>>(literals: T[]) => {
  if (!isZodLiteralsUnion(literals)) {
    throw new Error('literals must have at least two elements');
  }
  return z.union(literals);
};
