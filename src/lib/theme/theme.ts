import { darkThemeColors, lightThemeColors } from './color';

export const theme = {
  useColorSchemeMediaQuery: false,
  defaultMode: 'light',
  colors: {
    ...lightThemeColors,
    modes: {
      dark: {
        ...darkThemeColors,
      },
    },
  },
};
