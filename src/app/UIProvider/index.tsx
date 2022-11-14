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

const common = {
  defaultText: '#444444',
  subtleText: '#777777',
  gray: '#EDEDED',
  lightGray: '#FAFAFA',
  darkGray: '#C4C4C4',
  white: '#FFFFFF',
  black: '#000000',
  transparentBlack: '#00000026',
};

const themes: Record<PomodoroIntervals, StaticThemeSettings['color']> = {
  pomodoro: {
    ...common,
    primaryLight: '#FF4C4C26',
    primary: '#FF4C4CB5',
    primaryDark: '#471515',
    background: '#FFF2F2',
  },
  shortBreak: {
    ...common,
    primaryLight: '#4DDA6E26',
    primary: '#4DDA6E9E',
    primaryDark: '#14401D',
    background: '#F2FFF5',
  },
  longBreak: {
    ...common,
    primaryLight: '#4CACFF26',
    primary: '#4CACFF9E',
    primaryDark: '#153047',
    background: '#F2F9FF',
  },
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const { currentInterval } = useContext(AppContext);
  const theme: Theme = makeTheme(defaultThemeSettings(themes[currentInterval]));

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <Global styles={styles.global(theme)} />
    </>
  );
};
