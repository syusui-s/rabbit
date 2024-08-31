import { z } from 'zod';

// https://github.com/colinhacks/zod/issues/831
export const isZodLiteralsUnion = <T extends z.ZodLiteral<unknown>>(
  literals: T[],
): literals is [T, T, ...T[]] => literals.length >= 2;

export const literalsUnion = <T extends z.ZodLiteral<unknown>>(literals: T[]) => {
  if (!isZodLiteralsUnion(literals)) {
    throw new Error('literals must have at least two elements');
  }
  return z.union(literals);
};
