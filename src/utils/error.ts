// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (err: any): string => {
  if (err instanceof Error) {
    return err.toString();
  }

  if (typeof err === 'string') {
    return err;
  }

  return String(err);
};
