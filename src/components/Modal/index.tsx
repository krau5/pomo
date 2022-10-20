import { FunctionComponent, PropsWithChildren } from 'react';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import './Modal.css';

export type ModalProps = {
  onClose: () => void;
  title: string;
}

const Overlay: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="overlay">{children}</div>
);

export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({ children, onClose, title }) => {
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
  );
};
