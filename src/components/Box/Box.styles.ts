import { css } from '@emotion/react';
import type { Theme } from 'types';
import type { BoxProps } from './types';

export const useBox = ({
  display,
  alignItems,
  alignSelf,
  justifyContent,
  flexDirection,
  flexWrap,
  gap,

  top,
  right,
  bottom,
  left,

  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  aspectRatio,
  position,
  background,

  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,

  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,

  cursor,

  ...attributes
}: BoxProps) => {
  const boxStyle = (theme: Theme) => css`
    ${display && `display: ${display};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${alignSelf && `align-self: ${alignSelf};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}
    ${flexWrap && `flex-wrap: ${flexWrap};`}
    ${gap && `gap: ${theme.sizing(gap)};`}
        
    ${top && `top: ${theme.sizing(top)};`}
    ${right && `right: ${theme.sizing(right)};`}
    ${bottom && `bottom: ${theme.sizing(bottom)};`}
    ${left && `left: ${theme.sizing(left)};`}
        
    ${width && `width: ${theme.sizing(width)};`}
    ${height && `height: ${theme.sizing(height)};`}
    ${maxWidth && `max-width: ${theme.sizing(maxWidth)};`}
    ${maxHeight && `max-height: ${theme.sizing(maxHeight)};`}
    ${minWidth && `min-width: ${theme.sizing(minWidth)};`}
    ${minHeight && `min-height: ${theme.sizing(minHeight)};`}
    ${aspectRatio && `aspect-ratio: ${aspectRatio};`}
    ${position && `position: ${position};`}
    ${background && `background: ${theme.color[background]};`}
        
    ${(p || py || pt) && `padding-top: ${theme.sizing(p || py || pt)};`}
    ${(p || px || pr) && `padding-right: ${theme.sizing(p || px || pr)};`}
    ${(p || py || pb) && `padding-bottom: ${theme.sizing(p || py || pb)};`}
    ${(p || px || pl) && `padding-left: ${theme.sizing(p || px || pl)};`}
        
    ${(m || my || mt) && `margin-top: ${theme.sizing(m || my || mt)};`}
    ${(m || mx || mr) && `margin-right: ${theme.sizing(m || mx || mr)};`}
    ${(m || my || mb) && `margin-bottom: ${theme.sizing(m || my || mb)};`}
    ${(m || mx || ml) && `margin-left: ${theme.sizing(m || mx || ml)};`}
    
    ${cursor && `cursor: ${cursor};`}
  `;

  return { boxStyle, ...attributes };
};
