import { ChangeEvent, useMemo } from 'react';
import { TextField } from 'components/TextField';
import { PomodoroIntervals } from 'types';
import { Box } from 'components/Box';
import { Typography } from 'components/Typography';

type Props = {
  value: Record<PomodoroIntervals, number>;
  onChange: (
    interval: PomodoroIntervals
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SettingsForm = ({
  value: preferences,
  onChange: handleChange,
}: Props) => {
  const settings = useMemo(
    () => [
      {
        text: 'Focus length',
        component: (
          <TextField
            onChange={handleChange('pomodoro')}
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
            onChange={handleChange('shortBreak')}
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
            onChange={handleChange('longBreak')}
            value={preferences['longBreak']}
            min={1}
            max={99}
            type="number"
          />
        ),
      },
    ],
    [handleChange, preferences]
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
