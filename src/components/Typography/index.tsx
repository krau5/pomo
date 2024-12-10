import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import { ThemeColorName } from 'types';
import { styles } from './Typography.styles';
import { TypographyVariants } from './types';

type TypographyProps = {
  color?: ThemeColorName | 'inherit';
  nowrap?: boolean;
  notSelectable?: boolean;
  variant?: TypographyVariants;
};

const TypographyTags: Record<
  NonNullable<TypographyProps['variant']>,
  keyof jsx.JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  subtitle1: 'h3',
  subtitle2: 'h4',
  body: 'p',
};

export const Typography = ({
  children,
  color = 'inherit',
  notSelectable = false,
  nowrap = false,
  variant = 'body',
  ...props
}: PropsWithChildren<TypographyProps>) => {
  const TypographyTag = TypographyTags[variant];

  return (
    <TypographyTag
      css={styles({ color, notSelectable, nowrap, variant })}
      className={variant}
      {...props}
    >
      {children}
    </TypographyTag>
  );
};
