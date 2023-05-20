const openLink = (url: string) => {
  const a = document.createElement('a');
  a.href = new URL(url).toString();
  a.target = '_blank';
  a.rel = 'noreferrer noopener';
  a.click();
};

export default openLink;
