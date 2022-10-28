import { css, SerializedStyles } from '@emotion/react';
import { ButtonProps } from './types';
import { Theme } from 'types';

const buttonVariants: Record<NonNullable<ButtonProps['variant']> | 'icon', (size: ButtonProps['size']) => (theme: Theme) => SerializedStyles> = {
  primary: () => (theme) => css`
    padding: ${theme.sizing(0, 8)};
    max-height: ${theme.sizing(12)};
    height: ${theme.sizing(12)};
    color: ${theme.color.lightGray};
    background: ${theme.color.primary};
    border-radius: ${theme.sizing(2)};
    font-weight: 700;
    font-size: ${theme.sizing(4)};
  `,
  light: () => (theme: Theme) => css`
    font-weight: 700;
    font-size: ${theme.sizing(3)};
    color: ${theme.color.darkGray};
  `,
  icon: (size) => (theme) => css`
    & > span {
      font-size: ${size === 'large' ? theme.sizing(16) : theme.sizing(8)};
    }
  `,
};

export const styles = {
  button: (
    icon: ButtonProps['icon'],
    fullWidth: ButtonProps['fullWidth'],
    size: ButtonProps['size'],
    variant: NonNullable<ButtonProps['variant']>,
  ) => (theme: Theme) => css`
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;

    ${fullWidth && 'width: 100%'};
    ${buttonVariants[icon ? 'icon' : variant](size)(theme)}
  `,
  icon: (color: NonNullable<ButtonProps['iconColor']>) => (theme: Theme) => css`
    color: ${color !== 'inherit' ? theme.color[color] : 'inherit'};
  `,
};
