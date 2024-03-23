import { PropsWithChildren } from 'react';
import { Icon, IconNames } from 'components/Icon';
import { Typography } from 'components/Typography';
import { styles } from './Chip.styles';

type Props = {
  icon: IconNames;
};

export const Chip = ({
  children,
  icon,
  ...props
}: PropsWithChildren<Props>) => (
  <div css={styles.container} {...props}>
    <Icon color="primaryDark" name={icon} />

    <Typography color="primaryDark" nowrap variant="subtitle2">
      {children}
    </Typography>
  </div>
);
