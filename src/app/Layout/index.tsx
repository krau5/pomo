import { Fragment, h } from 'preact';
import { useContext } from 'preact/compat';
import { Typography } from 'components/Typography';
import { Section } from 'components/Section';
import { Tabs } from 'components/Tabs';
import { Settings } from 'components/Settings';
import { Timer } from 'components/Timer';
import { AppContext } from '../AppContext';

export const Layout = () => {
  const { currentInterval } = useContext(AppContext);

  return (
    <Fragment>
      <Typography>pomodoro</Typography>

      <Section fullWidth marginTop={32}>
        <Tabs
          tabs={[
            { id: 'pomodoro', name: 'pomodoro' },
            { id: 'shortBreak', name: 'short break' },
            { id: 'longBreak', name: 'long break' }
          ]}
          activeTab={currentInterval} />
      </Section>

      <Section marginTop={32}>
        <Timer />
      </Section>

      <Section marginTop={16}>
        <Settings />
      </Section>
    </Fragment>
  );
};
