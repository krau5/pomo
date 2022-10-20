import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ProgressBar } from 'components/ProgressBar';
import { Button } from 'components/Button';
import { AppContext } from 'app/AppContext';

type WorkerEvent = {
  action: 'syncTimer' | 'timerHasFinished';
  count?: number;
}

const worker = new Worker('/workers/timer.js');

const soundURL = new URL('/sounds/ring.mp3', import.meta.url);

const pomodoroInSession = 4;

export const Timer = () => {
  const { currentInterval, setCurrentInterval, intervals, pomodoroCount, setPomodoroCount } = useContext(AppContext);
  const currentIntervalTime = useMemo(() => intervals[currentInterval] * 60, [currentInterval, intervals]);

  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const sound = new Audio(soundURL.href);

  const handlePlay = useCallback(() => {
    setIsPaused(false);
    worker.postMessage({ action: 'start', duration: currentIntervalTime });
  }, [currentIntervalTime, worker]);

  const handlePause = useCallback(() => {
    setIsPaused(true);
    worker.postMessage({ action: 'pause' });
  }, [worker]);

  const getNextInterval = useCallback(() => {
    if (currentInterval === 'longBreak' || currentInterval === 'shortBreak') {
      return 'pomodoro';
    }

    return 'shortBreak';
  }, [currentInterval]);

  const processWorkerEvent = useCallback((event: MessageEvent<WorkerEvent>) => {
    const { action, count } = event.data;

    if (action === 'syncTimer' && typeof count === 'number') {
      setTimer(count);
      return;
    }

    if (action === 'timerHasFinished') {
      sound.play();

      setTimer(0);

      if (currentInterval === 'pomodoro' && pomodoroCount === pomodoroInSession - 1) {
        setCurrentInterval('longBreak');
        setPomodoroCount(0);
        return;
      }

      if (currentInterval === 'pomodoro') {
        setPomodoroCount(pomodoroCount + 1);
      }

      setCurrentInterval(getNextInterval());
    }
  }, [currentInterval, getNextInterval, pomodoroCount, sound, timer, worker]);

  const progress = useMemo(() => {
    if (timer > currentIntervalTime) {
      return 100;
    }

    return timer / currentIntervalTime * 100;
  }, [currentIntervalTime, timer]);

  useEffect(() => {
    worker.onmessage = (event: MessageEvent<WorkerEvent>) => {
      processWorkerEvent(event);
    };
  }, [processWorkerEvent, worker]);

  useEffect(() => {
    setIsPaused(true);
    worker.postMessage({ action: 'reset' });
  }, [intervals, worker]);

  useEffect(() => {
    if (!isPaused) {
      worker.postMessage({ action: 'reset' });
      worker.postMessage({ action: 'start', duration: currentIntervalTime });
    }
  }, [currentIntervalTime]);

  return (
    <ProgressBar progress={progress}>
      {isPaused && <Button color="primary" icon="play_circle_outline"  onClick={handlePlay} size="large" />}

      {!isPaused && <Button color="primary" icon="pause_circle_outline" onClick={handlePause} size="large" />}
    </ProgressBar>
  );
};
