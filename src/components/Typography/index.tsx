import { PropsWithChildren } from 'react';
import { styles } from './Typography.styles';
import { TypographyVariants } from './types';
import { ThemeColorName } from 'types';

type TypographyProps = {
  color?: ThemeColorName | 'inherit';
  nowrap?: boolean;
  notSelectable?: boolean;
  variant?: TypographyVariants;
};

const TypographyTags: Record<
  NonNullable<TypographyProps['variant']>,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  subtitle1: 'h3',
  subtitle2: 'h4',
  body: 'p',
  caption: 'span',
};

export const Typography = ({
  children,
  color = 'inherit',
  notSelectable = false,
  nowrap = false,
  variant = 'body',
}: PropsWithChildren<TypographyProps>) => {
  const TypographyTag = TypographyTags[variant];

  return (
    <TypographyTag
      css={styles({ color, notSelectable, nowrap, variant })}
      className={variant}
    >
      {children}
    </TypographyTag>
  );
};
