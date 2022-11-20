import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  container: (isChecked: boolean) => (theme: Theme) =>
    css`
      position: relative;
      width: ${theme.sizing(10)};
      max-width: ${theme.sizing(10)};
      padding: ${theme.sizing(1)};
      border-radius: ${theme.sizing(25)};
      background: ${isChecked
        ? theme.color.primary
        : theme.color.transparentBlack};
      transition: 300ms ease-in-out;
    `,
  indicator: (isChecked: boolean) => (theme: Theme) =>
    css`
      width: ${theme.sizing(4)};
      height: ${theme.sizing(4)};
      background: ${theme.color.background};
      border-radius: ${theme.sizing(25)};
      transform: translateX(${isChecked ? '100%' : 0});
      transition: 300ms ease-in-out;
    `,
  input: css`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  `,
};
