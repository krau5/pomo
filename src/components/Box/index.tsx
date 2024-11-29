import type { HTMLProps, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { BoxProps } from './types';
import { useBox } from './Box.styles';

export const Box = forwardRef<
  HTMLDivElement,
  PropsWithChildren<BoxProps> & HTMLProps<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const { boxStyle, ...attributes } = useBox({ ...props });

  return (
    <div css={boxStyle} {...attributes} ref={ref}>
      {children}
    </div>
  );
});
