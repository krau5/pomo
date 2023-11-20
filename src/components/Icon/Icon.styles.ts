import { css } from '@emotion/react';
import { Theme } from 'types';
import { IconProps } from 'components/Icon/index';

const sizeMap: Record<
  NonNullable<IconProps['size']>,
  (theme: Theme) => string
> = {
  small: (theme) => theme.sizing(3),
  medium: (theme) => theme.sizing(4.5),
  large: (theme) => theme.sizing(8),
};

export const styles =
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
