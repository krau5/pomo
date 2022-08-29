import { FunctionComponent, h } from 'preact';
import { JSXInternal } from 'preact/src/jsx';
import './Typography.css';

type Props = {
  variant?: 'title' | 'subtitle' | 'caption';
}

const TypographyTags: Record<NonNullable<Props['variant']>, keyof JSXInternal.IntrinsicElements> = {
  title: 'h1',
  subtitle: 'h3',
  caption: 'span'
};

export const Typography: FunctionComponent<Props> = ({ children, variant = 'title' }) => {
  const TypographyTag = TypographyTags[variant];

  return <TypographyTag className={variant}>{children}</TypographyTag>;
};
