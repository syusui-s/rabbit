export {};

type TwitterWidgetAPI = {
  widgets: {
    load(elem?: HTMLElement): void;
  };
};

declare global {
  interface Window {
    twttr?: TwitterWidgetAPI;
  }
}
