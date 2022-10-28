import { css, SerializedStyles } from '@emotion/react';
import { TypographyVariants } from './types';
import { Theme } from 'types';

export const styles: Record<
  TypographyVariants,
  (theme: Theme) => SerializedStyles
> = {
  title: (theme) => css`
    font-size: ${theme.sizing(9)};
    font-weight: 700;
    letter-spacing: 1px;
  `,
  subtitle: (theme) => css`
    font-size: ${theme.sizing(4)};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    user-select: none;
  `,
  caption: (theme) => css`
    font-size: ${theme.sizing(3)};
    font-weight: 500;
    color: ${theme.color.subtleText};
  `,
};
