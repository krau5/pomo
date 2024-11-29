import type { ThemeColorName } from 'types';

type Common = 'normal' | 'stretch' | 'unset';

type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';

type AlignSelf =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end';

type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type BoxSpacingProps = {
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;

  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
};

type BoxContainerProps = {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  alignItems?: AlignItems | Common;
  alignSelf?: AlignSelf | Common;
  justifyContent?: JustifyContent | Common;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap';
  gap?: string | number;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  background?: ThemeColorName;
};

type BoxRectProps = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;

  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;

  aspectRatio?: string;
};

type Miscellaneous = {
  cursor?: 'pointer';
};

export type BoxProps = BoxSpacingProps &
  BoxContainerProps &
  BoxRectProps &
  Miscellaneous;
