import assert from 'assert';

import jsdom from 'jsdom';
import { describe, it } from 'vitest';

import { parseOgpFromDOM } from '@/utils/ogp';

describe('parseOgpFromDOM', () => {
  it('should return correct ogp', () => {
    const inputHtml = `
      <!doctype html>
      <html lang="en">
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta property="og:url" content="https://example.com/">
      <meta property="og:title" content="Example">
      <meta property="og:description" content="Description">
      <meta property="og:image" content="http://syusui-s.github.io/rabbit/images/rabbit_app_256.png">
      <title>Example</title>
      </head>
      <body></body>
      </html>
    `;
    const doc = new jsdom.JSDOM(inputHtml);
    const actual = parseOgpFromDOM(doc.window.document, '');
    const expected = {
      url: 'https://example.com/',
      title: 'Example',
      description: 'Description',
      image: 'http://syusui-s.github.io/rabbit/images/rabbit_app_256.png',
    };
    assert.deepStrictEqual(actual, expected);
  });
});
