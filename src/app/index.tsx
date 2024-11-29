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

const PomoInterface = () => {
  const currentInterval = useAppSelector(selectCurrentInterval);

  const { onIntervalFinish } = useIntervalSequence();
  const { isOpened, open, close } = useOpen();

  useThemedFavicon();

  return (
    <UIProvider>
      <TimerProvider onTimerFinish={onIntervalFinish}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
          mt={8}
        >
          <IntervalChip interval={currentInterval} />

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            mt={8}
            gap={8}
          >
            <RemainingTime />

            <ControlPanel onSettingsClick={open} />
          </Box>
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
