import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  progressBar: css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
  `,
  content: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  circle: (showsProgress = false) => (theme: Theme) => css`
    fill: transparent;
    stroke-width: ${theme.sizing(3)};
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke: ${showsProgress ? theme.color.primary : theme.color.gray};
    stroke-linecap: round;
  `,
};
