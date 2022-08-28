import { Fragment, h } from 'preact';
import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'preact/compat';
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

export const SettingsForm = ({ onSubmit }: Props) => {
  const { intervals, setIntervals } = useContext(AppContext);

  const [preferences, setPreferences] = useState<Record<PomodoroIntervals, number>>({ ...intervals })

  const handleChange = useCallback((name: PomodoroIntervals) => (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setPreferences((currentPreferences) => ({ ...currentPreferences, [name]: Number(target.value) }))
  }, [])

  const handleSubmit = useCallback(() => {
    setIntervals(preferences);
    onSubmit && onSubmit();
  }, [onSubmit, preferences])

  const columns = useMemo(() => {
    const formFields: Record<string, PomodoroIntervals> = { 'pomodoro': 'pomodoro', 'short break': 'shortBreak', 'long break': 'longBreak' }

    return Object.entries(formFields).map(([title, intervalName]) => (
      <div className="column">
        <Typography variant="caption">{title}</Typography>

        <Section marginTop={8}>
          <NumericField
            name={intervalName}
            onChange={handleChange(intervalName)}
            value={preferences[intervalName]}
          />
        </Section>
      </div>
    ))
  }, [])

  return (
    <Fragment>
      <Section marginBottom={8}>
        <Typography variant="subtitle">Time (minutes)</Typography>
      </Section>

      <div className="row">{columns}</div>

      <div className="container">
        <Button onClick={handleSubmit}>Apply</Button>
      </div>
    </Fragment>
  )
};
