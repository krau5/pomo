import { useMemo } from 'react';
import { useTimerContext } from 'components/Timer';
import { Typography } from 'components/Typography';
import { getRemainingTime } from './getRemainingTime';

export const RemainingTime = () => {
  const { isPaused, timer, duration } = useTimerContext();

  const { minutes, seconds } = useMemo(
    () => getRemainingTime(duration, timer),
    [duration, timer],
  );

  return (
    <Typography
      color="primaryDark"
      notSelectable
      variant={isPaused ? 'h1' : 'h2'}
      data-testid="remaining-time"
    >
      {minutes}
      <br />
      {seconds}
    </Typography>
  );
};

export * from './getRemainingTime';
