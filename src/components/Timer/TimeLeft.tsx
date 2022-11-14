import { useContext, useMemo } from 'react';
import { AppContext } from 'app/AppContext';
import { Typography } from 'components/Typography';

type Props = {
  isPaused: boolean;
  time: number;
};

export const TimeLeft = ({ isPaused, time }: Props) => {
  const { currentInterval, intervals } = useContext(AppContext);

  const currentIntervalTime = useMemo(
    () => intervals[currentInterval] * 60 - time,
    [currentInterval, intervals, time]
  );

  const { minutes, seconds } = useMemo(() => {
    const minutes = Math.floor(currentIntervalTime / 60);
    const formattedMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;

    const seconds = currentIntervalTime % 60;
    const formattedSeconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;

    return { minutes: formattedMinutes, seconds: formattedSeconds };
  }, [currentIntervalTime]);

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
