import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { TimerContext } from './TimerContext';

type Props = {
  onTimerFinish?: () => void;
};

type WorkerEvent = {
  action: 'syncTimer' | 'timerHasFinished';
  count?: number;
};

const worker = new Worker('/workers/timer.js');

export const TimerProvider = ({
  children,
  onTimerFinish,
}: PropsWithChildren<Props>) => {
  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(0);
  const [duration, setDuration] = useState(0);

  const start = useCallback((duration: number, initialCount?: number) => {
    worker.postMessage({ action: 'start', duration, initialCount });
    setIsPaused(false);
  }, []);

  const pause = useCallback(() => {
    worker.postMessage({ action: 'pause' });
    setIsPaused(true);
  }, []);

  const reset = useCallback(() => {
    worker.postMessage({ action: 'reset' });
  }, []);

  const finish = useCallback(() => {
    worker.postMessage({ action: 'finish' });
  }, []);

  const processWorkerEvent = useCallback(
    (event: MessageEvent<WorkerEvent>) => {
      const { action, count } = event.data;

      if (action === 'syncTimer' && typeof count === 'number') {
        setTimer(count);
      }

      if (action === 'timerHasFinished' && onTimerFinish) {
        onTimerFinish();
      }
    },
    [onTimerFinish]
  );

  useEffect(() => {
    worker.onmessage = (event: MessageEvent<WorkerEvent>) => {
      processWorkerEvent(event);
    };
  }, [processWorkerEvent]);

  return (
    <TimerContext.Provider
      value={{
        isPaused,
        setIsPaused,
        timer,
        setTimer,
        duration,
        setDuration,
        start,
        pause,
        reset,
        finish,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export * from './TimeLeft';
export * from './ToggleTimer';
export * from './FinishTimer';

export * from './TimerContext';
