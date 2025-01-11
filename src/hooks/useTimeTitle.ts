import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';

export const useTimeTitle = (
  minutes: string,
  seconds: string,
  wasTimerStarted: boolean,
) => {
  const currentInterval = useAppSelector(selectCurrentInterval);

  useEffect(() => {
    if (wasTimerStarted) {
      const title = `${minutes}:${seconds} - Time`;

      if (currentInterval === 'focus') {
        document.title = `${title} to focus`;
        return;
      }

      document.title = `${title} for a break`;
    }
  }, [currentInterval, minutes, seconds, wasTimerStarted]);
};
