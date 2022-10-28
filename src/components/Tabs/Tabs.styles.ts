import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  tabs: (theme: Theme) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${theme.sizing(6)};
    padding: ${theme.sizing(2)};
    box-shadow: rgb(0 0 0 / 15%) 0 -0.5px 1px 0, rgb(0 0 0 / 20%) 0 2px 1px -1px,
      rgb(0 0 0 / 14%) 0 1px 1px 0, rgb(0 0 0 / 12%) 0 1px 3px 0;
  `,
  tab: (isActive: boolean, tabsCount: number) => (theme: Theme) =>
    css`
      text-align: center;
      user-select: none;
      font-weight: 700;
      border-radius: ${theme.sizing(6)};
      padding: ${theme.sizing(2, 0)};
      width: calc(
        (100% - ${tabsCount - 1} * ${theme.sizing(2)}) / ${tabsCount}
      );
      background: ${isActive ? theme.color.primary : 'inherit'};
      color: ${isActive ? theme.color.lightGray : 'inherit'};
    `,
};
