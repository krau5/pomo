import { ThemeColorName } from 'types';
import { IconProps } from 'ui/Icon';

export type ButtonProps = {
  fullWidth?: boolean;
  icon?: IconProps['name'];
  iconColor?: ThemeColorName | 'inherit';
  iconSize?: IconProps['size'];
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'light';
};
