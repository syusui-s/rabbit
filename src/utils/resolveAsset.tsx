const resolveAsset = (path: string): string => {
  const baseUrl = new URL(import.meta.env.BASE_URL, window.location.href);
  return new URL(path, baseUrl).href;
};

export default resolveAsset;
