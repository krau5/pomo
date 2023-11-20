type Common = 'normal' | 'stretch' | 'unset';

type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';

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
  px?: number;
  py?: number;

  mt?: number;
  mb?: number;
};

type BoxContainerProps = {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  alignItems?: AlignItems | Common;
  justifyContent?: JustifyContent | Common;
  flexDirection?: 'row' | 'column';
  width?: number;
  height?: number;
};

export type BoxProps = BoxSpacingProps &
  BoxContainerProps & {
    fullWidth?: boolean;
  };
