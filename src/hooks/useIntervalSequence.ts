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
      return 'focus';
    }

    if (
      currentInterval === 'focus' &&
      pomodoroCount === pomodorosInSession - 1
    ) {
      return 'longBreak';
    }

    return 'shortBreak';
  }, [currentInterval, pomodoroCount, pomodorosInSession]);

  const onIntervalFinish = useCallback(() => {
    const nextInterval = getNextInterval();

    dispatch(setCurrentInterval(nextInterval));

    if (nextInterval === 'shortBreak') {
      dispatch(incrementPomodoroCount());
      return;
    }

    if (nextInterval === 'longBreak') {
      dispatch(resetPomodoroCount());
    }
  }, [dispatch, getNextInterval]);

  useEffect(() => {
    dispatch(setCurrentInterval('focus'));
    dispatch(resetPomodoroCount());
  }, [dispatch, pomodorosInSession]);

  return { onIntervalFinish };
};
