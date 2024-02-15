import { ThemeColorName } from 'types';

export const iconNames = [
  'break',
  'close',
  'dots',
  'focus',
  'forward',
  'pause',
  'play',
] as const;

export type IconNames = (typeof iconNames)[number];

export type IconProps = {
  name: IconNames;
  color?: ThemeColorName | 'inherit';
  size?: 'small' | 'medium' | 'large';
};
