import fs from 'fs/promises';
import path from 'path';
import util from 'util';

const readDepFile = (key, filename) => fs.readFile(path.resolve(key, filename), { encoding: 'utf8' });

const getPackageInfo = async (key) => {
  try {
    const depPackageJson = await readDepFile(key, 'package.json');
    return JSON.parse(depPackageJson);
  } catch (e) {
    console.error(`package.json for ${key} is not found.`);
    return undefined;
  }
};

const getLicense = async (key) =>
  readDepFile(key, 'LICENSE')
    .catch(() => readDepFile(key, 'LICENCE*'))
    .catch(() => readDepFile(key, 'COPYING'))
    .catch(() => readDepFile(key, 'LICENSE-MIT'))
    .catch(() => readDepFile(key, 'LICENSE-MIT.txt'))
    .catch(() => readDepFile(key, 'license'))
    .catch(() => readDepFile(key, 'README'))
    .catch(() => readDepFile(key, 'README.md'))
    .catch(async () => JSON.stringify((await getPackageInfo(key))?.licenses, null, 2))
    .catch(() => {
      console.error(`license file for ${key} is not found.`);
      return undefined;
    });

const generatePackages = async function (selfName) {
  const packageLockJson = await fs.readFile('./package-lock.json', { encoding: 'utf8' });
  const packageLock = JSON.parse(packageLockJson);

  const insertedPackages = new Set();
  const result = [];

  const buildDependencies = async (deps) => {
    for (const [name, _ver] of Object.entries(deps)) {
      const key = `node_modules/${name}`;
      const dep = packageLock?.packages?.[key];
      if (dep == null) continue;
      if (dep.dev == true) continue;
      if (insertedPackages.has(name)) continue;

      const packageInfo = await getPackageInfo(key);
      const licenseSpdx = packageInfo.license;
      const licenseText = await getLicense(key);

      result.push({ name, version: dep.version, licenseSpdx, licenseText });
      insertedPackages.add(name);

      await buildDependencies(dep.dependencies ?? {});
    }
  };

  const dependencies = packageLock?.packages?.['']?.dependencies ?? {};
  await buildDependencies(dependencies);

  return result;
};

export default async function generateDependencyJson() {
  const packageJson = await fs.readFile('./package.json', { encoding: 'utf8' });
  const selfPackageInfo = JSON.parse(packageJson);
  const { name, author, version, homepage } = selfPackageInfo;

  const packages = await generatePackages(name);
  const myLicense = await fs.readFile('./LICENSE', { encoding: 'utf8' });

  const result = {
    self: {
      name,
      author,
      version,
      homepage,
      licenseText: myLicense,
    },
    packages,
  };

  await fs.mkdir('./public/', { recursive: true });
  await fs.writeFile('./public/packageInfo.json', JSON.stringify(result, null, 2), {
    encoding: 'utf8',
  });
}
