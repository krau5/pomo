import { PropsWithChildren, useContext } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { PomodoroIntervals, StaticThemeSettings, Theme } from 'types';
import { styles } from './UIProvider.styles';
import { AppContext } from 'app/AppContext';

const makeTheme = (themeSettings: StaticThemeSettings): Theme => {
  const { unit, ...theme } = themeSettings;

  return {
    ...theme,
    unit,
    sizing: (...sizes) => {
      return sizes.reduce(
        (accumulator, size) => `${accumulator}${size * unit}px `,
        ''
      );
    },
  };
};

const defaultThemeSettings = (
  color: StaticThemeSettings['color']
): StaticThemeSettings => ({
  color,
  font: "'Roboto Flex', sans-serif",
  unit: 4,
});

const transparentBlack = '#00000026';
const transparentWhite = '#FFFFFF26';

const common = (theme: 'light' | 'dark' = 'light') => ({
  lightGray: '#FAFAFA',
  darkGray: '#C4C4C4',
  contrastingTransparent:
    theme === 'light' ? transparentBlack : transparentWhite,
});

const themes: Record<
  PomodoroIntervals,
  Record<'light' | 'dark', StaticThemeSettings['color']>
> = {
  pomodoro: {
    light: {
      ...common(),
      primaryLight: '#FF4C4C26',
      primary: '#FF4C4CB5',
      primaryDark: '#471515',
      background: '#FFF2F2',
    },
    dark: {
      ...common('dark'),
      primaryLight: '#FF4C4C26',
      primary: '#FF4C4CB5',
      primaryDark: '#FFF2F2',
      background: '#0D0404',
    },
  },
  shortBreak: {
    light: {
      ...common(),
      primaryLight: '#4DDA6E26',
      primary: '#4DDA6E9E',
      primaryDark: '#14401D',
      background: '#F2FFF5',
    },
    dark: {
      ...common('dark'),
      primaryLight: '#4DDA6E26',
      primary: '#4DDA6E9E',
      primaryDark: '#F2FFF5',
      background: '#040D06',
    },
  },
  longBreak: {
    light: {
      ...common(),
      primaryLight: '#4CACFF26',
      primary: '#4CACFF9E',
      primaryDark: '#153047',
      background: '#F2F9FF',
    },
    dark: {
      ...common('dark'),
      primaryLight: '#4CACFF26',
      primary: '#4CACFF9E',
      primaryDark: '#F2F9FF',
      background: '#04090D',
    },
  },
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const { currentInterval, theme: uiTheme } = useContext(AppContext);

  const theme: Theme = makeTheme(
    defaultThemeSettings(themes[currentInterval][uiTheme])
  );

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <Global styles={styles.global(theme)} />
    </>
  );
};
