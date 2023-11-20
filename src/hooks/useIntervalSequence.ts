import { useCallback, useEffect } from 'react';
import { PomodoroIntervals } from 'types';
import {
  incrementPomodoroCount,
  resetPomodoroCount,
  selectCurrentInterval,
  selectPomodoroCount,
  selectPomodorosInSession,
  setCurrentInterval,
} from 'store/intervals';
import { useAppDispatch, useAppSelector } from 'store';

export const useIntervalSequence = () => {
  const dispatch = useAppDispatch();

  const pomodorosInSession = useAppSelector(selectPomodorosInSession);
  const currentInterval = useAppSelector(selectCurrentInterval);
  const pomodoroCount = useAppSelector(selectPomodoroCount);

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

  const onTimerFinish = useCallback(() => {
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

  return { onTimerFinish };
};
