import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  global: (theme: Theme) => css`
    * {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: ${theme.color.defaultText};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html, body {
      width: 100%;
      height: 100%;
      background: ${theme.color.lightGray};
    }

    #root {
      display: flex;
      align-items: center;
      flex-direction: column;

      max-width: ${theme.sizing(80)};
      width: ${theme.sizing(80)};

      padding-top: ${theme.sizing(16)};
      margin: 0 auto;
    }
  `,
};
