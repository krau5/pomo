import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  container: (theme: Theme) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: min-content;
      max-height: ${theme.sizing(12)};
      padding: ${theme.sizing(2, 4)};
      border-radius: ${theme.sizing(25)};
      border: 2px solid ${theme.color.primaryDark};
      background: ${theme.color.primaryLight};

      & > .icon {
        margin-right: ${theme.sizing(2)};
      }
    `,
};
