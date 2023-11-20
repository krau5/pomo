import { PropsWithChildren } from 'react';
import { Icon, IconNames } from 'ui/Icon';
import { Typography } from 'ui/Typography';
import { styles } from './Chip.styles';

type Props = {
  icon: IconNames;
};

export const Chip = ({ children, icon }: PropsWithChildren<Props>) => (
  <div css={styles.container}>
    <Icon color="primaryDark" name={icon} />

    <Typography color="primaryDark" nowrap variant="subtitle2">
      {children}
    </Typography>
  </div>
);
