import type { HTMLProps, PropsWithChildren } from 'react';
import type { BoxProps } from './types';
import { useBox } from './Box.styles';

export const Box = ({
  children,
  ref,
  ...props
}: PropsWithChildren<BoxProps> & HTMLProps<HTMLDivElement>) => {
  const { boxStyle, ...attributes } = useBox({ ...props });

  return (
    <div css={boxStyle} {...attributes} ref={ref}>
      {children}
    </div>
  );
};
