import { PropsWithChildren } from 'react';
import { Icon } from 'components/Icon';
import { ButtonProps } from './types';
import { styles } from './Button.styles';

export const Button = ({
  children,
  iconColor = 'primaryDark',
  icon,
  iconSize = 'large',
  onClick,
  size = 'medium',
  type = 'button',
  variant = 'primary',
}: PropsWithChildren<ButtonProps>) => (
  <button css={styles.button(size, variant)} onClick={onClick} type={type}>
    {icon && <Icon color={iconColor} name={icon} size={iconSize} />}

    {children}
  </button>
);
