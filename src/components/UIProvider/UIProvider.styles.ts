import { css } from '@emotion/react';
import { Theme } from 'types';
import { font } from './Font.styles';

export const styles = {
  global: (theme: Theme) => css`
    ${font()};

    * {
      font-family: ${theme.font};
      color: ${theme.color.primaryDark};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      background: ${theme.color.background};
      overflow: hidden;
    }

    #root {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      max-width: ${theme.sizing(80)};
      width: ${theme.sizing(80)};
      height: 100vh;

      margin: 0 auto;
    }
  `,
};
