import { PropsWithChildren, useState } from 'react';
import { AppContext } from './AppContext';
import { PomodoroIntervals } from 'types';

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [currentInterval, setCurrentInterval] =
    useState<PomodoroIntervals>('pomodoro');
  const [intervals, setIntervals] = useState<Record<PomodoroIntervals, number>>(
    {
      pomodoro: 50,
      shortBreak: 10,
      longBreak: 30,
    }
  );
  const [pomodoroCount, setPomodoroCount] = useState(0);

  return (
    <AppContext.Provider
      value={{
        currentInterval,
        setCurrentInterval,
        intervals,
        setIntervals,
        pomodoroCount,
        setPomodoroCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
