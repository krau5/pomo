import { PropsWithChildren } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { AppTheme, PomodoroIntervals, StaticThemeSettings, Theme } from 'types';
import { useAppSelector } from 'store';
import { selectTheme } from 'store/settings';
import { selectCurrentInterval } from 'store/intervals';
import { styles } from './UIProvider.styles';

const makeTheme = (themeSettings: StaticThemeSettings): Theme => {
  const { unit, ...theme } = themeSettings;

  return {
    ...theme,
    unit,
    sizing: (...sizes) => {
      return sizes.reduce<string>((accumulator, size) => {
        if (size !== undefined) {
          return `${accumulator}${
            typeof size === 'string' ? size : `${size * unit}px`
          } `;
        }

        return accumulator;
      }, '');
    },
  };
};

const defaultThemeSettings = (
  color: StaticThemeSettings['color'],
): StaticThemeSettings => ({
  color,
  font: "'Roboto Flex', sans-serif",
  unit: 4,
});

const transparentBlack = '#00000026';
const transparentWhite = '#FFFFFF26';

const common = (theme: AppTheme = 'light') => ({
  lightGray: '#FAFAFA',
  darkGray: '#C4C4C4',
  contrastingTransparent:
    theme === 'light' ? transparentBlack : transparentWhite,
});

const themes: Record<
  PomodoroIntervals,
  Record<AppTheme, StaticThemeSettings['color']>
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
  const currentInterval = useAppSelector(selectCurrentInterval);
  const uiTheme = useAppSelector(selectTheme);

  const theme: Theme = makeTheme(
    defaultThemeSettings(themes[currentInterval][uiTheme]),
  );

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <Global styles={styles.global(theme)} />
    </>
  );
};
