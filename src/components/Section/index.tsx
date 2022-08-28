import { h, FunctionComponent } from 'preact';

type Props = {
  fullWidth?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

export const Section: FunctionComponent<Props> = ({ children, fullWidth = false, marginTop, marginBottom }) => (
  <div className="section" style={{ marginTop, marginBottom, width: fullWidth ? '100%' : undefined }}>
    {children}
  </div>
)
