import { FunctionComponent, PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { Theme } from 'types';

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

export type BoxProps = {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  alignItems?: AlignItems | Common;
  justifyContent?: JustifyContent | Common;
  fullWidth?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

const styles = {
  container: ({ display, alignItems, justifyContent, fullWidth, marginTop, marginBottom }: BoxProps) => (theme: Theme) => css`
    ${display && css`display: ${display}`};
    ${alignItems && css`align-items: ${alignItems}`};
    ${justifyContent && css`justify-content: ${justifyContent}`};
    
    ${fullWidth && css`width: 100%`};
    
    ${marginTop && css`margin-top: ${theme.sizing(marginTop)}`};
    ${marginBottom && css`margin-bottom: ${theme.sizing(marginBottom)}`};
  `,
};

export const Box: FunctionComponent<PropsWithChildren<BoxProps>> = ({
  children,
  display = 'block',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  fullWidth = false,
  ...props
}) => (
  <div css={styles.container({ display, alignItems, justifyContent, fullWidth, ...props })}>
    {children}
  </div>
);
