import { FunctionComponent, PropsWithChildren } from 'react';

export type SectionProps = {
  fullWidth?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

export const Section: FunctionComponent<PropsWithChildren<SectionProps>> = ({
  children,
  fullWidth = false,
  marginTop,
  marginBottom,
}) => (
  <div className="section" style={{ marginTop, marginBottom, width: fullWidth ? '100%' : undefined }}>
    {children}
  </div>
);
