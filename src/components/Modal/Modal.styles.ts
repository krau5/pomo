import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  overlay: (theme: Theme) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${theme.color.contrastingTransparent};
  `,
  modal: (theme: Theme) => css`
    margin: ${theme.sizing(49, 'auto', 0)};
    border-radius: ${theme.sizing(4)};
    background: ${theme.color.background};
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.039), 0 5.5px 16px rgba(0, 0, 0, 0.19);
    min-width: ${theme.sizing(100)};

    @media screen and (max-width: 767px) {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      margin-top: 0;
    }
  `,
  header: (theme: Theme) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: ${theme.sizing(6)};
  `,
  content: (theme: Theme) => css`
    padding-bottom: ${theme.sizing(4)};
  `,
};
