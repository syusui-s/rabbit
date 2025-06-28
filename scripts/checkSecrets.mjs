/**
 * To the extent possible under law, the person who associated CC0
 * with this file has waived all copyright and related or
 * neighboring rights to this work.
 *
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
import fs from 'fs/promises';
import path from 'path';

const rootDir = path.resolve();
const pattern = /nsec1[0-9a-zA-Z]+/;
const ignored = [/^node_modules$/, /^\./, /\.tsbuildinfo$/, /^public$/, /^dist$/];

const ignoreNextLine = /@check-secrets-disable-next-line/;

const shouldIgnore = (filename) => ignored.some((pattern) => pattern.test(filename));

const searchFiles = async (folderPath) => {
  let didMatch = false;

  const files = await fs.readdir(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stats = await fs.stat(filePath);

    if (shouldIgnore(file)) continue;

    if (stats.isDirectory()) {
      const match = await searchFiles(filePath);
      didMatch ||= match;
    } else {
      const match = await checkKeyword(filePath);
      didMatch ||= match;
    }
  }

  return didMatch;
};

const checkKeyword = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf8');
  const lines = content.split('\n');
  let prevLine = '';
  let didMatch = false;
  let didShowFilename = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const match = line.match(pattern);
    if (match != null) {
      if (!didShowFilename) {
        console.error(filePath);
        didShowFilename = true;
      }
      if (ignoreNextLine.test(prevLine.trim())) {
        console.error(`ignored: ${i + 1}: "${match[0]}": ${line}`);
        continue;
      }
      console.error(`${i + 1}: "${match[0]}": ${line}`);
      didMatch = true;
    }

    prevLine = line;
  }

  return didMatch;
};

const main = async () => {
  const result = await searchFiles(rootDir);
  if (result) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};

export default main;
