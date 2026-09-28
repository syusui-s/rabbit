import assert from 'assert';

import { describe, it } from 'vitest';

import {
  blossomDescriptorToFileUploadResponse,
  fileUploadResponseToImetaTag,
  type BlossomBlobDescriptor,
} from '@/utils/imageUpload';

describe('blossomDescriptorToFileUploadResponse', () => {
  it('synthesizes nip94 tags from a blob descriptor', () => {
    const descriptor: BlossomBlobDescriptor = {
      url: 'https://blossom.example/abc.png',
      sha256: 'abc',
      size: 1234,
      type: 'image/png',
      uploaded: 1700000000,
    };

    const actual = blossomDescriptorToFileUploadResponse(descriptor);

    assert.equal(actual.status, 'success');
    assert.deepStrictEqual(actual.nip94_event?.tags, [
      ['url', 'https://blossom.example/abc.png'],
      ['x', 'abc'],
      ['ox', 'abc'],
      ['size', '1234'],
      ['m', 'image/png'],
    ]);
  });

  it('omits size and mime tags when they are absent', () => {
    const descriptor = {
      url: 'https://blossom.example/abc',
      sha256: 'abc',
    } as BlossomBlobDescriptor;

    const actual = blossomDescriptorToFileUploadResponse(descriptor);

    assert.deepStrictEqual(actual.nip94_event?.tags, [
      ['url', 'https://blossom.example/abc'],
      ['x', 'abc'],
      ['ox', 'abc'],
    ]);
  });

  it('prefers the server-provided nip94 tags (BUD-08) when present', () => {
    const descriptor: BlossomBlobDescriptor = {
      url: 'https://blossom.example/abc.png',
      sha256: 'abc',
      size: 1234,
      type: 'image/png',
      nip94: [
        ['url', 'https://blossom.example/resized.png'],
        ['m', 'image/png'],
        ['dim', '640x480'],
      ],
    };

    const actual = blossomDescriptorToFileUploadResponse(descriptor);

    assert.deepStrictEqual(actual.nip94_event?.tags, [
      ['url', 'https://blossom.example/resized.png'],
      ['m', 'image/png'],
      ['dim', '640x480'],
    ]);
  });

  it('produces an imeta tag usable by the upload pipeline', () => {
    const descriptor: BlossomBlobDescriptor = {
      url: 'https://blossom.example/abc.png',
      sha256: 'abc',
      size: 1234,
      type: 'image/png',
    };

    const response = blossomDescriptorToFileUploadResponse(descriptor);
    const imetaTag = fileUploadResponseToImetaTag(response);

    assert.deepStrictEqual(imetaTag, [
      'imeta',
      'url https://blossom.example/abc.png',
      'x abc',
      'ox abc',
      'size 1234',
      'm image/png',
    ]);
  });
});
