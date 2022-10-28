import { PropsWithChildren } from 'react';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Typography>pomodoro</Typography>

    <Box fullWidth marginTop={8}>{children}</Box>
  </>
);

