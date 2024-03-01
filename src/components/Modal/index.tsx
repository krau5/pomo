import { PropsWithChildren } from 'react';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import { styles } from './Modal.styles';

export type ModalProps = {
  isOpened?: boolean;
  onClose?: () => void;
  title: string;
};

const Overlay = ({ children }: PropsWithChildren) => (
  <div css={styles.overlay}>{children}</div>
);

const ModalHeader = ({ children }: PropsWithChildren) => (
  <header css={styles.header}>{children}</header>
);

const ModalContent = ({ children }: PropsWithChildren) => (
  <div css={styles.content}>{children}</div>
);

export const Modal = ({
  children,
  isOpened,
  onClose,
  title,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpened) {
    return null;
  }

  return (
    <Overlay>
      <div css={styles.modal}>
        <ModalHeader>
          <Typography variant="subtitle1">{title}</Typography>

          <Button
            icon="close"
            iconSize="medium"
            onClick={onClose}
            size="small"
            variant="light"
          />
        </ModalHeader>

        <ModalContent>{children}</ModalContent>
      </div>
    </Overlay>
  );
};
