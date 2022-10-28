import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react';
import { AppContext } from 'app/AppContext';
import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import { TextField } from 'components/TextField';
import { Button } from 'components/Button';
import { PomodoroIntervals } from 'types';
import { styles } from './SettingsForm.styles';

type Props = {
  onSubmit?: () => void;
}

const formFields: Record<string, PomodoroIntervals> = {
  pomodoro: 'pomodoro',
  'short break': 'shortBreak',
  'long break': 'longBreak',
};

export const SettingsForm = ({ onSubmit }: Props) => {
  const { intervals, setIntervals } = useContext(AppContext);

  const [preferences, setPreferences] = useState<Record<PomodoroIntervals, number>>({ ...intervals });

  const handleChange = useCallback((name: PomodoroIntervals) => (event: ChangeEvent<HTMLInputElement>) => {
    setPreferences((currentPreferences) => ({ ...currentPreferences, [name]: Number(event.target.value) }));
  }, []);

  const handleSubmit = useCallback(() => {
    setIntervals(preferences);
    onSubmit && onSubmit();
  }, [onSubmit, preferences]);

  const columns = useMemo(() => Object.entries(formFields).map(([title, intervalName]) => (
    <div css={styles.column} key={intervalName}>
      <Typography variant="caption">{title}</Typography>

      <Box marginTop={2}>
        <TextField
          name={intervalName}
          onChange={handleChange(intervalName)}
          value={preferences[intervalName]}
          type="number"
        />
      </Box>
    </div>
  )), [handleChange, preferences]);

  return (
    <>
      <Box marginBottom={2}>
        <Typography variant="subtitle">Time (minutes)</Typography>
      </Box>

      <div css={styles.row}>{columns}</div>

      <div css={styles.container}>
        <Button onClick={handleSubmit}>Apply</Button>
      </div>
    </>
  );
};
