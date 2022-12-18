import { ChangeEvent, useMemo } from 'react';
import { TextField } from 'components/TextField';
import { PomodoroIntervals } from 'types';
import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import { Switch } from 'components/Switch';
import { useAppSelector } from 'store';
import { selectTheme } from 'store/theme';
import { selectIsSoundEnabled } from 'store/preferences';

type Props = {
  preferences: Record<PomodoroIntervals, number>;
  pomodorosInSession: string | number;
  onIntervalChange: (
    interval: PomodoroIntervals
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onThemeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPomodorosInSessionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSoundChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SettingsForm = ({
  preferences,
  pomodorosInSession,
  onIntervalChange: handleIntervalChange,
  onThemeChange: handleThemeChange,
  onPomodorosInSessionChange: handlePomodorosInSessionChange,
  onSoundChange: handleSoundChange,
}: Props) => {
  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);
  const theme = useAppSelector(selectTheme);

  const settings = useMemo(
    () => [
      {
        text: 'Dark mode',
        component: (
          <Switch
            defaultChecked={theme === 'dark'}
            onChange={handleThemeChange}
          />
        ),
      },
      {
        text: 'Pomodoros until long break',
        component: (
          <TextField
            onChange={handlePomodorosInSessionChange}
            value={pomodorosInSession}
            min={1}
            max={99}
            type="number"
          />
        ),
      },
      {
        text: 'Focus length',
        component: (
          <TextField
            onChange={handleIntervalChange('pomodoro')}
            value={preferences['pomodoro']}
            min={1}
            max={99}
            type="number"
          />
        ),
      },
      {
        text: 'Short break length',
        component: (
          <TextField
            onChange={handleIntervalChange('shortBreak')}
            value={preferences['shortBreak']}
            min={1}
            max={99}
            type="number"
          />
        ),
      },
      {
        text: 'Long break length',
        component: (
          <TextField
            onChange={handleIntervalChange('longBreak')}
            value={preferences['longBreak']}
            min={1}
            max={99}
            type="number"
          />
        ),
      },
      {
        text: 'Sound',
        component: (
          <Switch
            defaultChecked={isSoundEnabled}
            onChange={handleSoundChange}
          />
        ),
      },
    ],
    [
      handleIntervalChange,
      handlePomodorosInSessionChange,
      handleSoundChange,
      handleThemeChange,
      isSoundEnabled,
      pomodorosInSession,
      preferences,
      theme,
    ]
  );

  return (
    <>
      {settings.map(({ text, component }, index) => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={16}
          px={6}
          key={index}
        >
          <Typography>{text}</Typography>

          {component}
        </Box>
      ))}
    </>
  );
};
