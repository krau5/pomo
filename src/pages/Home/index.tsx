import { useCallback, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Box } from 'components/Box';
import { Tabs } from 'components/Tabs';
import { Timer } from 'components/Timer';
import { Settings } from 'components/Settings';
import { AppContext } from 'app/AppContext';
import { Button } from 'components/Button';
import { auth } from 'constants/firebase';

export const Home = () => {
  const { currentInterval } = useContext(AppContext);
  const [user] = useAuthState(auth);

  const handleLogout = useCallback(() => {
    signOut(auth);
  }, []);

  return (
    <>
      <Tabs
        tabs={[
          { id: 'pomodoro', name: 'pomodoro' },
          { id: 'shortBreak', name: 'short break' },
          { id: 'longBreak', name: 'long break' },
        ]}
        activeTab={currentInterval} />

      <Box marginTop={8}>
        <Timer />
      </Box>

      <Box marginTop={4}>
        <Settings />
      </Box>

      <Box display="flex" justifyContent="center" marginTop={4}>
        {user !== null && <Button onClick={handleLogout} variant="light">Logout</Button>}
      </Box>
    </>
  );
};
