import { PropsWithChildren } from 'react';
import { styles } from './Box.styles';
import { BoxProps } from './types';

export const Box = ({
  children,
  display = 'block',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  flexDirection = 'row',
  fullWidth = false,
  ...props
}: PropsWithChildren<BoxProps>) => (
  <div
    css={styles({
      display,
      alignItems,
      justifyContent,
      flexDirection,
      fullWidth,
      ...props,
    })}
  >
    {children}
  </div>
);
