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
    background: ${theme.color.transparentBlack};
    padding-top: ${theme.sizing(49)};
  `,
  modal: (theme: Theme) => css`
    padding: ${theme.sizing(6)};
    margin: ${theme.sizing(0, 2)};
    border-radius: ${theme.sizing(4)};
    background: ${theme.color.lightGray};

    @media screen and (min-width: 768px) {
      min-width: ${theme.sizing(120)};
      margin: 0 auto;
    }
  `,
  header: (theme: Theme) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom: ${theme.sizing(6)};
    font-size: ${theme.sizing(4)};
    font-weight: 700;
    
    &:after {
      content: '';
      position: absolute;
      width: calc(100% + ${theme.sizing(12)});
      height: 1px;
      background: ${theme.color.darkGray};
      bottom: 0;
      left: ${theme.sizing(-6)};
    }
  `,
  content: (theme: Theme) => css`
    padding-top: ${theme.sizing(6)};
  `,
};
