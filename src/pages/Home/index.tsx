import { useContext } from 'react';
import { Box } from 'components/Box';
import { Tabs } from 'components/Tabs';
import { Timer } from 'components/Timer';
import { Settings } from 'components/Settings';
import { AppContext } from 'app/AppContext';

export const Home = () => {
  const { currentInterval } = useContext(AppContext);

  return (
    <>
      <Tabs
        tabs={[
          { id: 'pomodoro', name: 'pomodoro' },
          { id: 'shortBreak', name: 'short break' },
          { id: 'longBreak', name: 'long break' },
        ]}
        activeTab={currentInterval}
      />

      <Box marginTop={8}>
        <Timer />
      </Box>

      <Box marginTop={4}>
        <Settings />
      </Box>
    </>
  );
};
