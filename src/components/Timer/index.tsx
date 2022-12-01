import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from 'components/Button';
import { Box } from 'components/Box';
import { Settings } from './Settings';
import { Typography } from 'components/Typography';
import { PomodoroIntervals } from 'types';
import { useAppDispatch, useAppSelector } from 'store';
import { selectTheme } from 'store/theme';
import {
  incrementPomodoroCount,
  resetPomodoroCount,
  selectCurrentInterval,
  selectIntervals,
  selectPomodoroCount,
  setCurrentInterval,
} from 'store/intervals';

type WorkerEvent = {
  action: 'syncTimer' | 'timerHasFinished';
  count?: number;
};

const worker = new Worker('/workers/timer.js');

const soundURL = new URL('/sounds/ring.mp3', import.meta.url);

const link = document.getElementById('favicon') as HTMLLinkElement;

const pomodoroInSession = 4;

export const Timer = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(selectTheme);
  const currentInterval = useAppSelector(selectCurrentInterval);
  const intervals = useAppSelector(selectIntervals);
  const pomodoroCount = useAppSelector(selectPomodoroCount);

  const currentIntervalTime = useMemo(
    () => intervals[currentInterval] * 60,
    [currentInterval, intervals]
  );

  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [wasOnceStarted, setWasOnceStarted] = useState(false);

  const sound = useMemo(() => new Audio(soundURL.href), []);

  const updateFavicon = useCallback(
    (interval: PomodoroIntervals) => {
      if (link) {
        link.href = `/images/favicon/${interval}-${theme}.svg`;
      }
    },
    [theme]
  );

  const getNextInterval = useCallback(() => {
    if (currentInterval === 'longBreak' || currentInterval === 'shortBreak') {
      return 'pomodoro';
    }

    if (
      currentInterval === 'pomodoro' &&
      pomodoroCount !== pomodoroInSession - 1
    ) {
      return 'shortBreak';
    }

    return 'longBreak';
  }, [currentInterval, pomodoroCount]);

  const handleToggle = useCallback(() => {
    setIsPaused((previousIsPaused) => {
      if (!previousIsPaused) {
        worker.postMessage({ action: 'pause' });
      } else {
        worker.postMessage({
          action: 'start',
          duration: currentIntervalTime,
          initialCount: timer,
        });
      }

      return !previousIsPaused;
    });
  }, [currentIntervalTime, timer]);

  const handleSkipInterval = useCallback(() => {
    if (
      currentInterval === 'pomodoro' &&
      pomodoroCount === pomodoroInSession - 1
    ) {
      dispatch(resetPomodoroCount());
      dispatch(setCurrentInterval('longBreak'));
      setTimer(0);
      return;
    } else if (currentInterval === 'pomodoro') {
      dispatch(incrementPomodoroCount());
    }

    const nextInterval = getNextInterval();

    updateFavicon(nextInterval);
    dispatch(setCurrentInterval(getNextInterval()));
    setTimer(0);
  }, [
    currentInterval,
    dispatch,
    getNextInterval,
    pomodoroCount,
    updateFavicon,
  ]);

  const processWorkerEvent = useCallback(
    (event: MessageEvent<WorkerEvent>) => {
      const { action, count } = event.data;

      if (action === 'syncTimer' && typeof count === 'number') {
        setTimer(count);
        return;
      }

      if (action === 'timerHasFinished') {
        sound.play();

        const nextInterval = getNextInterval();

        if (currentInterval === 'pomodoro') {
          if (pomodoroCount === pomodoroInSession - 1) {
            dispatch(resetPomodoroCount());
          } else {
            dispatch(incrementPomodoroCount());
          }
        }

        updateFavicon(nextInterval);
        setCurrentInterval(nextInterval);
      }
    },
    [
      currentInterval,
      dispatch,
      getNextInterval,
      pomodoroCount,
      sound,
      updateFavicon,
    ]
  );

  const { minutes, seconds } = useMemo(() => {
    const minutes = Math.floor((currentIntervalTime - timer) / 60);
    const formattedMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;

    const seconds = (currentIntervalTime - timer) % 60;
    const formattedSeconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;

    return { minutes: formattedMinutes, seconds: formattedSeconds };
  }, [currentIntervalTime, timer]);

  useEffect(() => {
    worker.onmessage = (event: MessageEvent<WorkerEvent>) => {
      processWorkerEvent(event);
    };
  }, [processWorkerEvent]);

  useEffect(() => {
    setIsPaused(true);
    worker.postMessage({ action: 'reset' });
  }, [intervals]);

  useEffect(() => {
    if (!isPaused && timer === 0) {
      worker.postMessage({ action: 'reset' });
      worker.postMessage({
        action: 'start',
        duration: currentIntervalTime,
      });
    }
  }, [currentIntervalTime, isPaused, timer]);

  useEffect(() => {
    if (!isPaused && !wasOnceStarted) {
      setWasOnceStarted(true);
    }
  }, [isPaused, wasOnceStarted]);

  useEffect(() => {
    if (wasOnceStarted) {
      const title = `${minutes}:${seconds} - Time`;

      if (currentInterval === 'pomodoro') {
        document.title = `${title} to focus`;
      } else {
        document.title = `${title} for a break`;
      }
    }
  }, [currentInterval, minutes, seconds, wasOnceStarted]);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Typography
        color="primaryDark"
        notSelectable
        variant={isPaused ? 'h1' : 'h2'}
      >
        {minutes}
        <br />
        {seconds}
      </Typography>

      <Box display="flex" alignItems="center" mt={8}>
        <Settings />

        <Box px={4}>
          <Button
            icon={isPaused ? 'play' : 'pause'}
            size="large"
            onClick={handleToggle}
          />
        </Box>

        <Button
          icon="forward"
          onClick={handleSkipInterval}
          variant="secondary"
        />
      </Box>
    </Box>
  );
};
