import { PropsWithChildren, useContext, useEffect } from 'react';
import { Box } from 'components/Box';
import { AppContext } from 'app/AppContext';

const link = document.getElementById('favicon') as HTMLLinkElement;

export const Layout = ({ children }: PropsWithChildren) => {
  const { currentInterval, theme } = useContext(AppContext);

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
