import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  field: (theme: Theme) => css`
    width: ${theme.sizing(16)};
    height: ${theme.sizing(10)};
    text-align: center;
    background: inherit;
    outline: none;
    border: 1px solid ${theme.color.transparentBlack};
    border-radius: ${theme.sizing(2)};
  `,
};
