import { FunctionComponent, h } from 'preact';
import { Button } from '../Button';
import { Typography } from '../Typography';
import './Modal.css';

type Props = {
  onClose: () => void;
  title: string;
}

const Overlay: FunctionComponent = ({ children }) => (
  <div className="overlay">{children}</div>
)

export const Modal: FunctionComponent<Props> = ({ children, onClose, title}) => {
  return (
    <Overlay>
      <div className="modal">
        <header className="modal-header">
          <Typography>{title}</Typography>

          <Button icon="close" onClick={onClose} />
        </header>

        <div className="modal-content">{children}</div>
      </div>
    </Overlay>
  )
}
