import { useCallback, useEffect } from 'react';
import { useTimerContext } from 'components/Timer';
import { Button } from 'components/Button';

type Props = {
  duration: number;
  initialCount?: number;
};

export const ToggleTimer = ({
  duration: initialDuration,
  initialCount,
}: Props) => {
  const { isPaused, duration, setDuration, start, pause } = useTimerContext();

  const handleToggle = useCallback(() => {
    if (isPaused) {
      start(duration, initialCount);

      return;
    }

    pause();
  }, [duration, initialCount, isPaused, pause, start]);

  useEffect(() => {
    if (duration !== initialDuration) {
      setDuration(initialDuration);
    }
  }, [duration, initialDuration, setDuration]);

  return (
    <Button
      aria-label="Toggle timer"
      icon={isPaused ? 'play' : 'pause'}
      size="large"
      onClick={handleToggle}
    />
  );
};
