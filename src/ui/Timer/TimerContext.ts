import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type TimerContextValue = {
  isPaused: boolean;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;

  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;

  start: (duration: number, initialCount?: number) => void;
  pause: () => void;
  reset: () => void;
  finish: () => void;
};

export const TimerContext = createContext<TimerContextValue>({
  isPaused: true,
  setIsPaused: () => {},
  timer: 0,
  setTimer: () => {},

  duration: 0,
  setDuration: () => {},

  start: () => () => {},
  pause: () => {},
  reset: () => {},
  finish: () => {},
});

export const useTimerContext = () => useContext(TimerContext);
