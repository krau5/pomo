export type PomodoroIntervals = 'pomodoro' | 'shortBreak' | 'longBreak';

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
  sizing: (...sizes: number[]) => string;
};
