import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react';
import { AppContext } from 'app/AppContext';
import { Section } from 'components/Section';
import { Typography } from 'components/Typography';
import { NumericField } from 'components/NumericField';
import { Button } from 'components/Button';
import { PomodoroIntervals } from 'types';
import './Settings.css';

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
    <div className="column" key={intervalName}>
      <Typography variant="caption">{title}</Typography>

      <Section marginTop={8}>
        <NumericField
          name={intervalName}
          onChange={handleChange(intervalName)}
          value={preferences[intervalName]}
        />
      </Section>
    </div>
  )), [handleChange, preferences]);

  return (
    <>
      <Section marginBottom={8}>
        <Typography variant="subtitle">Time (minutes)</Typography>
      </Section>

      <div className="row">{columns}</div>

      <div className="container">
        <Button onClick={handleSubmit}>Apply</Button>
      </div>
    </>
  );
};
