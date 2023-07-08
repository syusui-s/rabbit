const stripMargin = (strings: TemplateStringsArray, ...values: any[]) => {
  const s = String.raw(strings, values);

  const result = [];
  const lines = s.split('\n');

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const marginRemoved = line.trimStart();
    if (result.length > 0 || marginRemoved.length > 0) {
      result.push(marginRemoved);
    }
  }

  while (result.length > 0) {
    const lastLine = result[result.length - 1];
    if (lastLine.length > 0) break;
    result.pop();
  }

  return result.join('\n');
};

export default stripMargin;
