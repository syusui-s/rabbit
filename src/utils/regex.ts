export const escapeRegExpSymbols = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const wordsRegex = (words: string[]) => new RegExp(words.map(escapeRegExpSymbols).join('|'));

export const asCaseInsensitive = (regex: RegExp) => {
  if (regex.flags.indexOf('i') >= 0) return regex;
  return new RegExp(regex.source, `${regex.flags}i`);
};
