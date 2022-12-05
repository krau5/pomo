import { css, SerializedStyles } from '@emotion/react';
import { Theme, ThemeColorName } from 'types';
import { TypographyVariants } from './types';

type Props = {
  color: ThemeColorName | 'inherit';
  notSelectable: boolean;
  nowrap: boolean;
  variant: TypographyVariants;
};

export const typographyStyles: Record<
  TypographyVariants,
  (theme: Theme) => SerializedStyles
> = {
  h1: (theme) => css`
    font-size: ${theme.sizing(64)};
    font-weight: 200;
    line-height: 85%;

    font-variation-settings: 'opsz' 14, 'GRAD' 0, 'slnt' 0, 'XTRA' 468,
      'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203,
      'YTFI' 738;
  `,
  h2: (theme) => css`
    font-size: ${theme.sizing(64)};
    font-weight: 800;
    line-height: 85%;

    font-variation-settings: 'opsz' 14, 'GRAD' 0, 'slnt' 0, 'XTRA' 468,
      'XOPQ' 96, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203,
      'YTFI' 738;
  `,
  subtitle1: (theme) => css`
    font-size: ${theme.sizing(6)};
    font-weight: 700;
  `,
  subtitle2: (theme) => css`
    font-size: ${theme.sizing(6)};
    font-weight: 500;
  `,
  body: (theme) => css`
    font-size: ${theme.sizing(4)};
    font-weight: 400;
  `,
  caption: (theme) => css`
    font-size: ${theme.sizing(3)};
    font-weight: 400;
  `,
};

export const styles =
  ({ color, notSelectable, nowrap, variant }: Props) =>
  (theme: Theme) =>
    css`
      ${typographyStyles[variant](theme)};
      ${nowrap && 'white-space: nowrap'};
      ${notSelectable && 'user-select: none'};
      color: ${color === 'inherit' ? color : theme.color[color]};
    `;
