import { css } from '@emotion/react';
import { Theme, ThemeColorName } from 'types';
import { ButtonProps } from './types';

const background: Record<'primary' | 'secondary', ThemeColorName> = {
  primary: 'primary',
  secondary: 'primaryLight',
};

const padding: Record<
  NonNullable<ButtonProps['size']>,
  (theme: Theme) => string
> = {
  large: (theme) => theme.sizing(8, 12),
  medium: (theme) => theme.sizing(6),
  small: (theme) => theme.sizing(2),
};

export const styles = {
  button:
    (
      size: NonNullable<ButtonProps['size']>,
      variant: NonNullable<ButtonProps['variant']>,
    ) =>
    (theme: Theme) => css`
      border: none;
      outline: none;
      cursor: pointer;
      background: ${variant === 'light'
        ? 'inherit'
        : theme.color[background[variant]]};
      padding: ${padding[size](theme)};
      border-radius: ${theme.sizing(8)};
    `,
};
