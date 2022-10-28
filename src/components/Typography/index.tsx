import { FunctionComponent, PropsWithChildren } from 'react';
import { styles } from './Typography.styles';
import { TypographyVariants } from './types';

type TypographyProps = {
  variant?: TypographyVariants;
}

const TypographyTags: Record<NonNullable<TypographyProps['variant']>, keyof JSX.IntrinsicElements> = {
  title: 'h1',
  subtitle: 'h3',
  caption: 'span',
};

export const Typography: FunctionComponent<PropsWithChildren<TypographyProps>> = ({ children, variant = 'title' }) => {
  const TypographyTag = TypographyTags[variant];

  return <TypographyTag css={styles[variant]} className={variant}>{children}</TypographyTag>;
};
