import { FunctionComponent, PropsWithChildren } from 'react';
import { ButtonProps } from './types';
import { styles } from './Button.styles';

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  iconColor = 'inherit',
  fullWidth = false,
  icon,
  onClick,
  size = 'medium',
  type = 'button',
  variant = 'primary',
}) => (
  <button
    css={styles.button(icon, fullWidth, size, variant)}
    onClick={onClick}
    type={type}
  >
    {icon && (
      <span css={styles.icon(iconColor)} className="material-icons">
        {icon}
      </span>
    )}

    {children}
  </button>
);
