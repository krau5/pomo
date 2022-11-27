import { createContext, Dispatch, SetStateAction } from 'react';
import { PomodoroIntervals } from 'types';

type AppContextValue = {
  currentInterval: PomodoroIntervals;
  setCurrentInterval: Dispatch<SetStateAction<PomodoroIntervals>>;
  intervals: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  setIntervals: Dispatch<SetStateAction<Record<PomodoroIntervals, number>>>;
  pomodoroCount: number;
  setPomodoroCount: Dispatch<SetStateAction<number>>;
  theme: 'light' | 'dark';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
};

export const AppContext = createContext<AppContextValue>({
  currentInterval: 'pomodoro',
  setCurrentInterval: () => {},
  intervals: { pomodoro: 0, shortBreak: 0, longBreak: 0 },
  setIntervals: () => {},
  pomodoroCount: 0,
  setPomodoroCount: () => {},
  theme: 'light',
  setTheme: () => {},
});
