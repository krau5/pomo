import { PropsWithChildren } from 'react';
import { Icon, IconNames } from 'components/Icon';
import { Typography } from 'components/Typography';
import { styles } from './Chip.styles';

export type ChipProps = {
  icon: IconNames;
};

export const Chip = ({ children, icon }: PropsWithChildren<ChipProps>) => (
  <div css={styles.container}>
    <Icon color="primaryDark" name={icon} />

    <Typography color="primaryDark" nowrap variant="subtitle2">
      {children}
    </Typography>
  </div>
);
