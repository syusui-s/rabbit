// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConstructorOf<T> = abstract new (...args: any[]) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AbstractConstructorOf<T> = abstract new (...args: any[]) => T;
