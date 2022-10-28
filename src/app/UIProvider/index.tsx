import { PropsWithChildren } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { StaticThemeSettings, Theme } from 'types';
import { styles } from './UIProvider.styles';

const makeTheme = (themeSettings: StaticThemeSettings): Theme => {
  const { unit, ...theme } = themeSettings;

  return {
    ...theme,
    unit,
    sizing: (...sizes) => {
      return sizes.reduce((accumulator, size) => `${accumulator}${size * unit}px `, '');
    },
  };
};

const defaultThemeSettings: StaticThemeSettings = {
  color: {
    primary: '#F97070',
    primaryDark: '#E06464',
    defaultText: '#444444',
    subtleText: '#777777',
    gray: '#EDEDED',
    lightGray: '#FAFAFA',
    darkGray: '#C4C4C4',
    white: '#FFFFFF',
    black: '#000000',
    transparentBlack: '#00000033',
  },
  unit: 4,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const theme = makeTheme(defaultThemeSettings);

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <Global styles={styles.global(theme)} />
    </>
  );
};
