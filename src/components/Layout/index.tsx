import { PropsWithChildren, useEffect } from 'react';
import { Box } from 'components/Box';
import { useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';
import { selectTheme } from 'store/theme';

const link = document.getElementById('favicon') as HTMLLinkElement;

export const Layout = ({ children }: PropsWithChildren) => {
  const currentInterval = useAppSelector(selectCurrentInterval);
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (link) {
      link.href = `/images/favicon/${currentInterval}-${theme}.svg`;
    }
  }, [currentInterval, theme]);

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
