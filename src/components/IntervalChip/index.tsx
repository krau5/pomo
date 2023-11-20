import { Chip } from 'ui/Chip';
import { useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';
import { PomodoroIntervals } from 'types';

const chipLabels: Record<PomodoroIntervals, string> = {
  pomodoro: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

export const IntervalChip = () => {
  const currentInterval = useAppSelector(selectCurrentInterval);

  const label = chipLabels[currentInterval];

  return (
    <Chip icon={currentInterval === 'pomodoro' ? 'focus' : 'break'}>
      {label}
    </Chip>
  );
};
