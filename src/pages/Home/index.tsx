import { Box } from 'components/Box';
import { Timer } from 'components/Timer';
import { Chip } from 'components/Chip';
import { PomodoroIntervals } from 'types';
import { useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';

const chipLabels: Record<PomodoroIntervals, string> = {
  pomodoro: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

export const Home = () => {
  const currentInterval = useAppSelector(selectCurrentInterval);

  const label = chipLabels[currentInterval];

  return (
    <>
      <Chip icon={currentInterval === 'pomodoro' ? 'focus' : 'break'}>
        {label}
      </Chip>

      <Box mt={8}>
        <Timer />
      </Box>
    </>
  );
};
