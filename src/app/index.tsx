import { useCallback, useEffect } from 'react';
import { Layout } from 'components/Layout';
import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';
import { Chip } from 'components/Chip';
import { PomodoroIntervals } from 'types';
import { useAppDispatch, useAppSelector } from 'store';
import {
  incrementPomodoroCount,
  resetPomodoroCount,
  selectCurrentInterval,
  selectPomodoroCount,
  selectPomodorosInSession,
  setCurrentInterval,
} from 'store/intervals';
import { TimerProvider } from 'components/Timer';
import { Settings } from './Settings';

const chipLabels: Record<PomodoroIntervals, string> = {
  pomodoro: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

export const App = () => {
  const dispatch = useAppDispatch();

  const pomodorosInSession = useAppSelector(selectPomodorosInSession);
  const currentInterval = useAppSelector(selectCurrentInterval);
  const pomodoroCount = useAppSelector(selectPomodoroCount);

  const label = chipLabels[currentInterval];

  const getNextInterval = useCallback((): PomodoroIntervals => {
    if (currentInterval === 'shortBreak' || currentInterval === 'longBreak') {
      return 'pomodoro';
    }

    if (
      currentInterval === 'pomodoro' &&
      pomodoroCount === pomodorosInSession - 1
    ) {
      return 'longBreak';
    }

    return 'shortBreak';
  }, [currentInterval, pomodoroCount, pomodorosInSession]);

  const handleTimerFinish = useCallback(() => {
    const nextInterval = getNextInterval();

    if (nextInterval === 'longBreak') {
      dispatch(resetPomodoroCount());
    } else if (nextInterval !== 'pomodoro') {
      dispatch(incrementPomodoroCount());
    }

    dispatch(setCurrentInterval(nextInterval));
  }, [dispatch, getNextInterval]);

  useEffect(() => {
    dispatch(setCurrentInterval('pomodoro'));
    dispatch(resetPomodoroCount());
  }, [dispatch, pomodorosInSession]);

  return (
    <UIProvider>
      <TimerProvider onTimerFinish={handleTimerFinish}>
        <Layout>
          <Chip icon={currentInterval === 'pomodoro' ? 'focus' : 'break'}>
            {label}
          </Chip>

          <Box mt={8}>
            <Settings />
          </Box>
        </Layout>
      </TimerProvider>
    </UIProvider>
  );
};
