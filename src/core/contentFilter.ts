/**
 * Content filter is a text which expresses the filter.
 *
 * - And condition
 *     - The text "AND" (upper case) or white space means an "and" condition (&&).
 *     - Examples:
 *         hello AND world
 *         hello world
 * - Or condition
 *     - OR (upper case) means an "or" condition (&&).
 *     - Examples:
 *         hello OR world
 * - Grouping
 *     ()
 * - Normal text
 *     Case-insensitive
 *     helloworld,
 * - Double quotes
 *     Case-sensitive
 *     "Hello World"
 */
export type ContentFilterAnd = { filterType: 'AND'; children: ContentFilter[] };
export type ContentFilterOr = { filterType: 'OR'; children: ContentFilter[] };
export type ContentFilterNot = { filterType: 'NOT'; child: ContentFilter };
export type ContentFilterTextInclude = { filterType: 'Text'; text: string };
export type ContentFilterRegex = { filterType: 'Regex'; regex: string; flag: string };

export type ContentFilter =
  | ContentFilterAnd
  | ContentFilterOr
  | ContentFilterNot
  | ContentFilterTextInclude
  | ContentFilterRegex;

export const applyContentFilter =
  (filter: ContentFilter) =>
  (content: string): boolean => {
    switch (filter.filterType) {
      case 'AND':
        return filter.children.every((child) => applyContentFilter(child)(content));
      case 'OR':
        return filter.children.some((child) => applyContentFilter(child)(content));
      case 'NOT':
        return !applyContentFilter(filter.child)(content);
      case 'Text':
        return content.includes(filter.text);
      case 'Regex':
        return new RegExp(filter.regex, filter.flag).test(content);
      default:
        console.error('unsupported content filter type');
        break;
    }
    return false;
  };
