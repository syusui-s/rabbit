import { z } from 'zod';

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

export const ContentFilterAndSchema = z.object({
  filterType: z.literal('AND'),
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  children: z.array(z.lazy(() => ContentFilterSchema)),
});

export const ContentFilterOrSchema = z.object({
  filterType: z.literal('OR'),
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  children: z.array(z.lazy(() => ContentFilterSchema)),
});

export const ContentFilterNotSchema = z.object({
  filterType: z.literal('NOT'),
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  child: z.lazy(() => ContentFilterSchema),
});

export const ContentFilterTextIncludeSchema = z.object({
  filterType: z.literal('Text'),
  text: z.string(),
});

export const ContentFilterRegexSchema = z
  .object({
    filterType: z.literal('Regex'),
    regex: z.string(),
    flag: z.string(),
  })
  .refine(({ regex, flag }) => {
    try {
      /* eslint-disable-next-line no-new */
      new RegExp(regex, flag);
      return true;
    } catch {
      return false;
    }
  });

// 再帰的型定義を用いる場合、Zodでは型情報を提供しなければならない。
// https://github.com/colinhacks/zod#recursive-types
export const ContentFilterSchema: z.ZodSchema<ContentFilter> = z.union([
  ContentFilterAndSchema,
  ContentFilterOrSchema,
  ContentFilterNotSchema,
  ContentFilterTextIncludeSchema,
  ContentFilterRegexSchema,
]);

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
