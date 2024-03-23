import { Chip } from 'components/Chip';
import { PomodoroIntervals } from 'types';

type Props = {
  interval: PomodoroIntervals;
};

const chipLabels: Record<PomodoroIntervals, string> = {
  pomodoro: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

export const IntervalChip = ({ interval }: Props) => {
  const label = chipLabels[interval];

  return (
    <Chip
      icon={interval === 'pomodoro' ? 'focus' : 'break'}
      data-testid="interval-chip"
    >
      {label}
    </Chip>
  );
};
