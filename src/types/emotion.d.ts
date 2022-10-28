import '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import { Theme as UITheme } from '.';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends UITheme {}
}

declare module '@emotion/core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: Interpolation<UITheme>;
  }
}
