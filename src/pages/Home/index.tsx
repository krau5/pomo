import { Box } from 'components/Box';
import { Chip } from 'components/Chip';
import { PomodoroIntervals } from 'types';
import { useAppDispatch, useAppSelector } from 'store';
import {
  incrementPomodoroCount,
  resetPomodoroCount,
  selectCurrentInterval,
  selectPomodoroCount,
  setCurrentInterval,
} from 'store/intervals';
import { Settings } from './Settings';
import { TimerProvider } from 'components/Timer';
import { useCallback } from 'react';
import { selectTheme } from 'store/theme';

const chipLabels: Record<PomodoroIntervals, string> = {
  pomodoro: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

const pomodoroInSession = 4;

const favicon = document.getElementById('favicon') as HTMLLinkElement;

export const Home = () => {
  const dispatch = useAppDispatch();

  const currentInterval = useAppSelector(selectCurrentInterval);
  const pomodoroCount = useAppSelector(selectPomodoroCount);
  const theme = useAppSelector(selectTheme);

  const label = chipLabels[currentInterval];

  const getNextInterval = useCallback((): PomodoroIntervals => {
    if (currentInterval === 'shortBreak' || currentInterval === 'longBreak') {
      return 'pomodoro';
    }

    if (
      currentInterval === 'pomodoro' &&
      pomodoroCount === pomodoroInSession - 1
    ) {
      return 'longBreak';
    }

    return 'shortBreak';
  }, [currentInterval, pomodoroCount]);

  const updateFavicon = useCallback(
    (interval: PomodoroIntervals) => {
      if (favicon) {
        favicon.href = `/images/favicon/${interval}-${theme}.svg`;
      }
    },
    [theme]
  );

  const handleTimerFinish = useCallback(() => {
    const nextInterval = getNextInterval();

    if (nextInterval === 'longBreak') {
      dispatch(resetPomodoroCount());
    } else if (nextInterval !== 'pomodoro') {
      dispatch(incrementPomodoroCount());
    }

    updateFavicon(nextInterval);
    dispatch(setCurrentInterval(nextInterval));
  }, [dispatch, getNextInterval, updateFavicon]);

  return (
    <TimerProvider onTimerFinish={handleTimerFinish}>
      <Chip icon={currentInterval === 'pomodoro' ? 'focus' : 'break'}>
        {label}
      </Chip>

      <Box mt={8}>
        <Settings />
      </Box>
    </TimerProvider>
  );
};
