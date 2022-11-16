import { Theme, ThemeColorName } from 'types';
import coffeeBreak from '/images/icons/break.svg';
import close from '/images/icons/cross.svg';
import dots from '/images/icons/dots.svg';
import focus from '/images/icons/focus.svg';
import forward from '/images/icons/forward.svg';
import pause from '/images/icons/pause.svg';
import play from '/images/icons/play.svg';
import { css } from '@emotion/react';

const iconNames = [
  'break',
  'close',
  'dots',
  'focus',
  'forward',
  'pause',
  'play',
] as const;

export type IconNames = typeof iconNames[number];

export type IconProps = {
  name: IconNames;
  color?: ThemeColorName | 'inherit';
  size?: 'small' | 'medium' | 'large';
};

const iconSource: Record<IconNames, string> = {
  break: coffeeBreak,
  close,
  dots,
  focus,
  forward,
  pause,
  play,
};

const sizeMap: Record<
  NonNullable<IconProps['size']>,
  (theme: Theme) => string
> = {
  small: (theme) => theme.sizing(3),
  medium: (theme) => theme.sizing(4.5),
  large: (theme) => theme.sizing(8),
};

const styles =
  (color: IconProps['color'], size: NonNullable<IconProps['size']>) =>
  (theme: Theme) =>
    css`
      display: block;
      width: ${sizeMap[size](theme)};
      height: auto;
      ${color && `color: ${color === 'inherit' ? color : theme.color[color]}`};
    `;

export const Icon = ({ color, name, size = 'large' }: IconProps) => (
  <img
    className="icon"
    css={styles(color, size)}
    src={iconSource[name]}
    alt={name}
  />
);
