import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { Theme, ThemeColorName } from 'types';
import { Break } from './static/Break';
import { Close } from './static/Close';
import { Dots } from './static/Dots';
import { Focus } from './static/Focus';
import { Forward } from './static/Forward';
import { Pause } from './static/Pause';
import { Play } from './static/Play';

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

const icons: Record<IconNames, ReactNode> = {
  break: <Break />,
  close: <Close />,
  dots: <Dots />,
  focus: <Focus />,
  forward: <Forward />,
  pause: <Pause />,
  play: <Play />,
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
      display: flex;
      justify-content: center;
      align-items: center;

      width: ${sizeMap[size](theme)};
      height: ${sizeMap[size](theme)};

      & > svg {
        ${color && `fill: ${color === 'inherit' ? color : theme.color[color]}`};
        width: ${sizeMap[size](theme)};
        height: auto;
      }
    `;

export const Icon = ({ color, name, size = 'large' }: IconProps) => (
  <span className="icon" css={styles(color, size)}>
    {icons[name]}
  </span>
);
