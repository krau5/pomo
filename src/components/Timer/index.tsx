import { h } from 'preact';
import { useCallback, useContext, useEffect, useMemo, useState } from 'preact/compat';
import { ProgressBar } from 'components/ProgressBar';
import { Button } from 'components/Button';
import { AppContext } from 'app/AppContext';
import { PomodoroIntervals } from 'types';

export const Timer = () => {
  const { currentInterval, setCurrentInterval, intervals, pomodoroCount, setPomodoroCount } = useContext(AppContext);
  const currentIntervalTime = intervals[currentInterval] * 60;

  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(0);

  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handlePlay = useCallback(() => {
    setIsPaused(false)
  }, []);

  const getNextInterval = useCallback((): PomodoroIntervals => {
    if (currentInterval === 'longBreak' || currentInterval === 'shortBreak') {
      return 'pomodoro';
    }

    return 'shortBreak';
  }, [currentInterval])

  const progress = useMemo(() => timer / currentIntervalTime * 100, [currentIntervalTime, timer])

  useEffect(() => {
    if (timer >= currentIntervalTime) {
      if (currentInterval === 'pomodoro' && pomodoroCount === 3) {
        setPomodoroCount(0);
        setCurrentInterval('longBreak');
        setTimer(0);
        return;
      }

      if (currentInterval === 'pomodoro') {
        setPomodoroCount((count) => count + 1);
      }

      setCurrentInterval(getNextInterval())
      setTimer(0);
    }
  },  [currentInterval, currentIntervalTime, getNextInterval, pomodoroCount, timer])

  useEffect(() => {
    if (!isPaused && timer <= currentIntervalTime) {
      const interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000)

      return () => {
        clearInterval(interval);
      }
    }

    return () => {}
  }, [currentIntervalTime, isPaused, timer]);

  return (
    <ProgressBar progress={progress}>
      {isPaused && <Button color="primary" icon="play_circle_outline"  onClick={handlePlay} size="large" />}

      {!isPaused && <Button color="primary" icon="pause_circle_outline" onClick={handlePause} size="large" />}
    </ProgressBar>
  )
}
