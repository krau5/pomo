import { h } from 'preact';
import { useState } from 'preact/compat';
import { AppContext } from './AppContext';
import { Layout } from './Layout';
import { PomodoroIntervals } from 'types';

export const App = () => {
  const [currentInterval, setCurrentInterval] = useState<PomodoroIntervals>('pomodoro');
  const [intervals, setIntervals] = useState<Record<PomodoroIntervals, number>>({ pomodoro: 50, shortBreak: 10, longBreak: 30 });
  const [pomodoroCount, setPomodoroCount] = useState(0);

  return (
    <AppContext.Provider
      value={{ currentInterval, setCurrentInterval, intervals, setIntervals, pomodoroCount, setPomodoroCount }}
    >
      <Layout />
    </AppContext.Provider>
  );
};
