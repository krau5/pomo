import { useContext } from 'react';
import { Box } from 'components/Box';
import { Timer } from 'components/Timer';
import { AppContext } from 'app/AppContext';
import { Chip } from 'components/Chip';
import { PomodoroIntervals } from 'types';

const chipLabels: Record<PomodoroIntervals, string> = {
  pomodoro: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

export const Home = () => {
  const { currentInterval } = useContext(AppContext);

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
