import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  textField: (theme: Theme) => css`
    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    outline: none;
    border-radius: ${theme.sizing(2)};
    height: ${theme.sizing(12)};
    width: 100%;
    padding: ${theme.sizing(2, 4)};
    background: ${theme.color.gray};
    border: 1px solid ${theme.color.darkGray};

    &:focus {
      border-color: ${theme.color.primary};
    }
  `,
};
