import { useMemo } from 'react';
import { Typography } from 'components/Typography';
import { useTimerContext } from './TimerContext';

export const TimeLeft = () => {
  const { isPaused, timer, duration } = useTimerContext();

  const { minutes, seconds } = useMemo(() => {
    const minutes = Math.floor((duration - timer) / 60);
    const formattedMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;

    const seconds = (duration - timer) % 60;
    const formattedSeconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;

    return { minutes: formattedMinutes, seconds: formattedSeconds };
  }, [duration, timer]);

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
