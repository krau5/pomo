import { ThemeColorName } from 'types';

export type ButtonProps = {
  fullWidth?: boolean;
  icon?: string;
  iconColor?: ThemeColorName | 'inherit';
  onClick?: () => void;
  size?: 'medium' | 'large';
  type?: 'button' | 'submit';
  variant?: 'primary' | 'light';
};
