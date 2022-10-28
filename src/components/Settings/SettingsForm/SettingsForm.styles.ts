import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  container: (theme: Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: ${theme.sizing(12)};
  `,
  row: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  column: (theme: Theme) => css`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: calc((100% - ${theme.sizing(6)}) / 3);
  `,
};
