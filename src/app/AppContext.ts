import { createContext } from 'preact';
import { StateUpdater } from 'preact/compat';
import { PomodoroIntervals } from '../types';

type AppContextValue = {
  currentInterval: PomodoroIntervals;
  setCurrentInterval: StateUpdater<PomodoroIntervals>;
  intervals: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  setIntervals: StateUpdater<Record<PomodoroIntervals, number>>;
  pomodoroCount: number;
  setPomodoroCount: StateUpdater<number>;
}

export const AppContext = createContext<AppContextValue>({
  currentInterval: 'pomodoro',
  setCurrentInterval: () => {},
  intervals: { pomodoro: 0, shortBreak: 0, longBreak: 0 },
  setIntervals: () => {},
  pomodoroCount: 0,
  setPomodoroCount: () => {}
});
