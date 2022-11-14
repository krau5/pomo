import { Theme } from 'types';
import { css } from '@emotion/react';
import { BoxProps } from './types';

export const styles =
  ({
    display,
    alignItems,
    justifyContent,
    flexDirection,
    fullWidth,
    px,
    py,
    mt,
    mb,
    width,
    height,
  }: BoxProps) =>
  (theme: Theme) =>
    css`
      ${display && `display: ${display};`}
      ${alignItems && `align-items: ${alignItems};`}
      ${justifyContent && `justify-content: ${justifyContent};`}
      ${flexDirection && `flex-direction: ${flexDirection};`}
      
      ${width && `width: ${theme.sizing(width)};`}
      ${height && `height: ${theme.sizing(height)};`}

      ${fullWidth && 'width: 100%;'}

      ${mt && `margin-top: ${theme.sizing(mt)};`}
      ${mb && `margin-bottom: ${theme.sizing(mb)};`}

      ${px && `padding: ${theme.sizing(py || 0, px)};`}
      ${py && `padding: ${theme.sizing(py, px || 0)};`}
    `;
