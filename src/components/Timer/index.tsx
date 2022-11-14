import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Button } from 'components/Button';
import { AppContext } from 'app/AppContext';
import { Box } from 'components/Box';
import { TimeLeft } from './TimeLeft';
import { Settings } from './Settings';

type WorkerEvent = {
  action: 'syncTimer' | 'timerHasFinished';
  count?: number;
};

const worker = new Worker('/workers/timer.js');

const soundURL = new URL('/sounds/ring.mp3', import.meta.url);

const pomodoroInSession = 4;

export const Timer = () => {
  const {
    currentInterval,
    setCurrentInterval,
    intervals,
    pomodoroCount,
    setPomodoroCount,
  } = useContext(AppContext);
  const currentIntervalTime = useMemo(
    () => intervals[currentInterval] * 60,
    [currentInterval, intervals]
  );

  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const sound = useMemo(() => new Audio(soundURL.href), []);

  const getNextInterval = useCallback(() => {
    if (currentInterval === 'longBreak' || currentInterval === 'shortBreak') {
      return 'pomodoro';
    }

    return 'shortBreak';
  }, [currentInterval]);

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
      setPomodoroCount(0);
      setCurrentInterval('longBreak');
      return;
    } else if (currentInterval === 'pomodoro') {
      setPomodoroCount(pomodoroCount + 1);
    }

    setCurrentInterval(getNextInterval());
    setTimer(0);
  }, [
    currentInterval,
    getNextInterval,
    pomodoroCount,
    setCurrentInterval,
    setPomodoroCount,
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

        setTimer(0);

        if (
          currentInterval === 'pomodoro' &&
          pomodoroCount === pomodoroInSession - 1
        ) {
          setCurrentInterval('longBreak');
          setPomodoroCount(0);
          return;
        }

        if (currentInterval === 'pomodoro') {
          setPomodoroCount(pomodoroCount + 1);
        }

        setCurrentInterval(getNextInterval());
      }
    },
    [
      currentInterval,
      getNextInterval,
      pomodoroCount,
      setCurrentInterval,
      setPomodoroCount,
      sound,
    ]
  );

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

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <TimeLeft isPaused={isPaused} time={timer} />

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
