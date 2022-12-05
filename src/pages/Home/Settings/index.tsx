import { useEffect, useMemo, useRef, useState } from 'react';
import {
  FinishTimer,
  TimeLeft,
  ToggleTimer,
  useTimerContext,
} from 'components/Timer';
import { Box } from 'components/Box';
import { useAppSelector } from 'store';
import { selectCurrentInterval, selectIntervals } from 'store/intervals';
import { SettingsModal } from './SettingsModal';

export const Settings = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const intervals = useAppSelector(selectIntervals);
  const currentInterval = useAppSelector(selectCurrentInterval);

  const {
    isPaused,
    setIsPaused,
    timer,
    duration,
    start: startTimer,
    reset: resetTimer,
  } = useTimerContext();

  const [wasOnceStarted, setWasOnceStarted] = useState(false);

  const currentIntervalTime = useMemo(
    () => intervals[currentInterval] * 60,
    [currentInterval, intervals]
  );

  const { minutes, seconds } = useMemo(() => {
    const minutes = Math.floor((duration - timer) / 60);
    const formattedMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;

    const seconds = (duration - timer) % 60;
    const formattedSeconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;

    return { minutes: formattedMinutes, seconds: formattedSeconds };
  }, [duration, timer]);

  useEffect(() => {
    if (!isPaused && !wasOnceStarted) {
      setWasOnceStarted(true);
    }
  }, [isPaused, wasOnceStarted]);

  useEffect(() => {
    if (wasOnceStarted) {
      const title = `${minutes}:${seconds} - Time`;

      if (currentInterval === 'pomodoro') {
        document.title = `${title} to focus`;
        return;
      }

      document.title = `${title} for a break`;
    }
  }, [currentInterval, minutes, seconds, wasOnceStarted]);

  useEffect(() => {
    setIsPaused(true);
    resetTimer();
  }, [intervals, resetTimer, setIsPaused]);

  useEffect(() => {
    if (!isPaused && timer === 0) {
      resetTimer();
      startTimer(currentIntervalTime);
    }
  }, [currentIntervalTime, isPaused, resetTimer, startTimer, timer]);

  useEffect(() => {
    if (timer === currentIntervalTime) {
      audioRef.current?.play();
    }
  }, [currentIntervalTime, timer]);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <TimeLeft />

      <Box display="flex" alignItems="center" mt={8}>
        <SettingsModal />

        <Box px={4}>
          <ToggleTimer duration={currentIntervalTime} initialCount={timer} />
        </Box>

        <FinishTimer />
      </Box>

      <audio src="/sounds/ring.mp3" ref={audioRef} />
    </Box>
  );
};
