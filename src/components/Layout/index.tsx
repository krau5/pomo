import { PropsWithChildren } from 'react';
import { Box } from 'components/Box';

export const Layout = ({ children }: PropsWithChildren) => (
  <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    fullWidth
    mt={8}
  >
    {children}
  </Box>
);
