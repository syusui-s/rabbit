const IdRegex = /^[0-9a-f]{64}$/;

const isValidId = (s: string): boolean => {
  const result = typeof s === 'string' && s.length === 64 && IdRegex.test(s);
  if (!result) console.warn('invalid id is ignored: ', s);
  return result;
};

export default isValidId;
