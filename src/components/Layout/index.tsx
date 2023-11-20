import { PropsWithChildren } from 'react';
import { Box } from 'components/Box';
import { useThemedFavicon } from 'hooks';

export const Layout = ({ children }: PropsWithChildren) => {
  useThemedFavicon();

  return (
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
};
