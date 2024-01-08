export type ColorTheme = {
  id: string;
  name: string;
  brightness: 'light' | 'dark';
  className?: string;
  rabbitIconPath: string;
};

export const colorThemes: Record<string, ColorTheme> = {
  sakura: {
    id: 'sakura',
    name: 'Sakura',
    brightness: 'light',
    className: 'theme-sakura',
    rabbitIconPath: 'images/rabbit_app_256.png',
  },
  cinnamon: {
    id: 'cinnamon',
    name: 'Cinnamon',
    brightness: 'light',
    className: 'theme-cinnamon',
    rabbitIconPath: 'images/rabbit_muted_256.png',
  },
  yozakura: {
    id: 'yozakura',
    name: 'Yozakura',
    brightness: 'dark',
    className: 'theme-yozakura',
    rabbitIconPath: 'images/rabbit_256.png',
  },
  'midnight-blue': {
    id: 'midnight-blue',
    name: 'Midnight Blue',
    brightness: 'dark',
    className: 'theme-midnight-blue',
    rabbitIconPath: 'images/rabbit_muted_256.png',
  },
  black: {
    id: 'black',
    name: 'Black',
    brightness: 'dark',
    className: 'theme-black',
    rabbitIconPath: 'images/rabbit_muted_256.png',
  },
};
