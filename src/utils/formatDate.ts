export type RelativeDate =
  | { kind: 'now' }
  | { kind: 'seconds'; value: number }
  | { kind: 'minutes'; value: number }
  | { kind: 'hours'; value: number }
  | { kind: 'days'; value: number }
  | { kind: 'abs'; value: Date };

export type AbsoluteDate =
  | { kind: 'today'; value: Date }
  | { kind: 'yesterday'; value: Date }
  | { kind: 'abs'; value: Date };

export type RelativeDateFormatter = (parsedDate: RelativeDate) => string;
export type AbsoluteDateFormatter = (parsedDate: AbsoluteDate) => string;

const defaultRelativeDateFormatter = (parsedDate: RelativeDate): string => {
  switch (parsedDate.kind) {
    case 'now':
      return 'now';
    case 'seconds':
      return `${parsedDate.value}s`;
    case 'minutes':
      return `${parsedDate.value}m`;
    case 'hours':
      return `${parsedDate.value}h`;
    case 'days':
      return `${parsedDate.value}d`;
    case 'abs':
    default:
      return parsedDate.value.toLocaleDateString();
  }
};

const formatTime = (date: Date): string =>
  `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;

const defaultAbsoluteDateLongFormatter = (parsedDate: AbsoluteDate): string => {
  switch (parsedDate.kind) {
    case 'today':
      return parsedDate.value.toLocaleTimeString();
    case 'yesterday':
    case 'abs':
    default:
      return parsedDate.value.toLocaleDateString();
  }
};

const defaultAbsoluteDateShortFormatter = (parsedDate: AbsoluteDate): string => {
  switch (parsedDate.kind) {
    case 'today':
      return formatTime(parsedDate.value);
    case 'yesterday':
      return `昨日 ${formatTime(parsedDate.value)}`;
    case 'abs':
    default:
      return parsedDate.value.toLocaleString();
  }
};

const calcDiffSec = (date: Date, currentDate: Date): number =>
  Math.round(Number(currentDate) - Number(date)) / 1000;

const parseDateDiff = (date: Date, currentDate: Date): RelativeDate => {
  const diffSec = calcDiffSec(date, currentDate);

  if (diffSec < 10) {
    return { kind: 'now' };
  }
  if (diffSec < 60) {
    return { kind: 'seconds', value: Math.round(diffSec) };
  }
  if (diffSec < 3600) {
    return { kind: 'minutes', value: Math.round(diffSec / 60) };
  }
  if (diffSec < 86400) {
    // 1 days
    return { kind: 'hours', value: Math.round(diffSec / 3600) };
  }
  if (diffSec < 604800) {
    // 1 week
    return { kind: 'days', value: Math.round(diffSec / 86400) };
  }
  return { kind: 'abs', value: date };
};

const isSameDate = (lhs: Date, rhs: Date): boolean =>
  lhs.getFullYear() === rhs.getFullYear() &&
  lhs.getMonth() === rhs.getMonth() &&
  lhs.getDate() === rhs.getDate();

const yesterdayOf = (date: Date): Date => new Date(+date - 24 * 60 * 60 * 1000);

const formatAbsolute = (
  date: Date,
  currentDate: Date,
  formatter: AbsoluteDateFormatter,
): string => {
  if (isSameDate(date, currentDate)) {
    return formatter({ kind: 'today', value: date });
  }
  if (isSameDate(date, yesterdayOf(currentDate))) {
    return formatter({ kind: 'yesterday', value: date });
  }
  return formatter({ kind: 'abs', value: date });
};

export const formatAbsoluteLong = (date: Date, currentDate: Date = new Date()) =>
  formatAbsolute(date, currentDate, defaultAbsoluteDateLongFormatter);

export const formatAbsoluteShort = (date: Date, currentDate: Date = new Date()) =>
  formatAbsolute(date, currentDate, defaultAbsoluteDateShortFormatter);

export const formatRelative = (
  date: Date,
  currentDate: Date = new Date(),
  formatter: RelativeDateFormatter = defaultRelativeDateFormatter,
): string => formatter(parseDateDiff(date, currentDate));
