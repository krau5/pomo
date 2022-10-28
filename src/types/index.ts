export type PomodoroIntervals = 'pomodoro' | 'shortBreak' | 'longBreak';

export type ThemeColorName =
  | 'primary'
  | 'primaryDark'
  | 'defaultText'
  | 'subtleText'
  | 'gray'
  | 'lightGray'
  | 'darkGray'
  | 'white'
  | 'black'
  | 'transparentBlack';

export type StaticThemeSettings = {
  color: Record<ThemeColorName, string>;
  unit: number;
};

export type Theme = StaticThemeSettings & {
  sizing: (...sizes: number[]) => string;
};
