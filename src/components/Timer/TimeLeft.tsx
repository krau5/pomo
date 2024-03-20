import { useMemo } from 'react';
import { Typography } from 'components/Typography';
import { getRemainingTime } from 'utils';
import { useTimerContext } from './TimerContext';

export const TimeLeft = () => {
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
    >
      {minutes}
      <br />
      {seconds}
    </Typography>
  );
};
