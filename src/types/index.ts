export type PomodoroIntervals = 'focus' | 'shortBreak' | 'longBreak';

export type AppTheme = 'light' | 'dark';

export type ColorScheme = 'red' | 'green' | 'blue';

export type ThemeColorName =
  | 'primaryLight'
  | 'primary'
  | 'primaryDark'
  | 'background'
  | 'contrastingTransparent';

export type StaticThemeSettings = {
  color: Record<ThemeColorName, string>;
  font: string;
  unit: number;
};

export type Theme = StaticThemeSettings & {
  sizing: (...sizes: (number | string | undefined)[]) => string;
};
