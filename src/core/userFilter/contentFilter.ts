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

export type ContentFilter = ContentFilterAnd | ContentFilterOr | ContentFilterNode;
type ContentFilterAnd = { type: 'AND'; children: ContentFilter[] };
type ContentFilterOr = { type: 'OR'; children: ContentFilter[] };
type ContentFilterNode = { text: string };

const applyContentFilter = (contentFilter: ContentFilter): boolean => {
  // TODO implement
  throw new Error('NotImplemented');
};

// NORMAL (implicit AND)
// A filter 'hello world' should match 'hello world'
// A filter "Lorem amet" should match "Lorem ipsum dolor sit amet"
//
// AND
//
// A filter "Lorem AND amet" should match "Lorem ipsum dolor sit amet"
//
// CASE
// A filter 'hello world' should match 'HELLO WORLD'
// A filter 'HELLO WORLD' should match 'hello world'
//
// DOUBLEQUOTE
// A filter '"HELLO WORLD"' should match 'HELLO WORLD'
// A filter '"HELLO WORLD"' should not match 'hello world'

