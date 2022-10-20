import { FunctionComponent, PropsWithChildren } from 'react';
import './Typography.css';

type TypographyProps = {
  variant?: 'title' | 'subtitle' | 'caption';
}

const TypographyTags: Record<NonNullable<TypographyProps['variant']>, keyof JSX.IntrinsicElements> = {
  title: 'h1',
  subtitle: 'h3',
  caption: 'span',
};

export const Typography: FunctionComponent<PropsWithChildren<TypographyProps>> = ({ children, variant = 'title' }) => {
  const TypographyTag = TypographyTags[variant];

  return <TypographyTag className={variant}>{children}</TypographyTag>;
};
