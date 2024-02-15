import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  field: (theme: Theme) => css`
    width: 100%;
    height: ${theme.sizing(10)};
    background: inherit;
    outline: none;
    border: 1px solid ${theme.color.contrastingTransparent};
    border-radius: ${theme.sizing(2)};
    padding: ${theme.sizing(2, 4)};

    &:focus {
      border: 2px solid ${theme.color.primaryDark};
    }
  `,
};
