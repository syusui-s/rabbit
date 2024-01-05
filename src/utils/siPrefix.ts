const Prefixes = ['k', 'M', 'G', 'T', 'P'] as const;

export type SIPrefix = {
  value: number;
  prefix: (typeof Prefixes)[number] | null;
};

const siPrefix = (
  value: number,
  options?: { precision?: number; minDigits?: number },
): SIPrefix => {
  const precision = options?.precision ?? 3;
  if (precision <= 0) throw new Error(`precision is too small: ${precision}`);

  const minDigits = options?.minDigits ?? 4;
  const minValue = 10 ** (minDigits - 1);
  if (value < minValue) return { value, prefix: null };

  const divider = 10 ** (Math.floor(Math.log10(value) / 3) * 3);
  const divided = value / divider;
  let rounded = Math.round(divided * 10 ** precision) / 10 ** precision;
  let index = Math.max(Math.floor(Math.log10(value) / 3) - 1, 0);
  if (rounded >= 1000) {
    rounded /= 1000;
    index += 1;
  }
  if (index >= Prefixes.length) return { value, prefix: null };

  return { value: rounded, prefix: Prefixes[index] };
};

export const formatSiPrefix = (
  inputValue: number,
  options?: { digits?: number; minDigits?: number },
): string => {
  const { value, prefix } = siPrefix(inputValue, {
    precision: 2,
    minDigits: options?.minDigits ?? 5,
  });
  if (prefix == null) return `${inputValue}`;

  const digits = options?.digits ?? 3;
  const wholeNumberDigits = Math.floor(Math.log10(value)) + 1;
  const precision = Math.max(digits - wholeNumberDigits, 0);
  const rounded = Math.round(value * 10 ** precision) / 10 ** precision;

  return `${rounded}${prefix}`;
};

export default siPrefix;
