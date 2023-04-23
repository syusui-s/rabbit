// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TupleNonNull<T extends readonly any[]> = {
  [P in keyof T]: NonNullable<T[P]>;
};

const ensureNonNull =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


    <T extends readonly any[]>(tuple: T) =>
    <R>(f: (tupleNonNull: TupleNonNull<T>) => R): R | null => {
      if (tuple.some((e) => e == null)) {
        return null;
      }
      return f(tuple as TupleNonNull<T>);
    };

export default ensureNonNull;
