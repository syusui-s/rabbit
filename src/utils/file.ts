const readAs =
  <T>(fn: (reader: FileReader, file: File) => void) =>
  (file: File): Promise<T | undefined> =>
    new Promise<T | undefined>((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        // user must specify correct type
        resolve(reader.result as T);
      });
      fn(reader, file);
    });

export const dataUrl = readAs<string>((reader, file) => {
  reader.readAsDataURL(file);
});

export const arrayBuffer = readAs<ArrayBuffer>((reader, file) => {
  reader.readAsArrayBuffer(file);
});
