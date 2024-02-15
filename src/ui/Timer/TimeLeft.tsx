import { useMemo } from 'react';
import { Typography } from 'ui/Typography';
import { getTimeLeft } from 'utils/getTimeLeft';
import { useTimerContext } from './TimerContext';

export const TimeLeft = () => {
  const { isPaused, timer, duration } = useTimerContext();

  const { minutes, seconds } = useMemo(
    () => getTimeLeft(duration, timer),
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
