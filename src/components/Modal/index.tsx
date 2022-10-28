import { PropsWithChildren } from 'react';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import { styles } from './Modal.styles';

export type ModalProps = {
  onClose: () => void;
  title: string;
}

const Overlay = ({ children }: PropsWithChildren) => (
  <div css={styles.overlay}>{children}</div>
);

export const Modal = ({ children, onClose, title }: PropsWithChildren<ModalProps>) => (
  <Overlay>
    <div css={styles.modal}>
      <header css={styles.header}>
        <Typography>{title}</Typography>

        <Button icon="close" onClick={onClose} />
      </header>

      <div css={styles.content}>{children}</div>
    </div>
  </Overlay>
);
