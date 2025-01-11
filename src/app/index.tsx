import { Provider } from 'react-redux';
import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';
import { TimerProvider } from 'components/Timer';
import { useThemedFavicon, useIntervalSequence, useOpen } from 'hooks';
import { ControlPanel } from 'features/ControlPanel';
import { IntervalChip } from 'features/IntervalChip';
import { store, useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';
import { RemainingTime } from 'features/RemainingTime';
import { SettingsModal } from 'features/SettingsModal';
import { selectAppTheme } from 'store/settings';
import { ColorScheme, PomodoroIntervals } from 'types';

const colorScheme: Record<PomodoroIntervals, ColorScheme> = {
  focus: 'red',
  shortBreak: 'green',
  longBreak: 'blue',
};

const PomoInterface = () => {
  const currentInterval = useAppSelector(selectCurrentInterval);
  const appTheme = useAppSelector(selectAppTheme);

  const { onIntervalFinish } = useIntervalSequence();
  const { isOpened, open, close } = useOpen();

  useThemedFavicon();

  return (
    <UIProvider appTheme={appTheme} colorScheme={colorScheme[currentInterval]}>
      <TimerProvider onTimerFinish={onIntervalFinish}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={8}
          width="100%"
        >
          <IntervalChip interval={currentInterval} />

          <RemainingTime />

          <ControlPanel onSettingsClick={open} />
        </Box>

        <SettingsModal isOpened={isOpened} onClose={close} />
      </TimerProvider>
    </UIProvider>
  );
};

export const App = () => (
  <Provider store={store}>
    <PomoInterface />
  </Provider>
);
