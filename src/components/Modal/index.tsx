import { PropsWithChildren } from 'react';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import { useClickAway } from 'hooks';
import { styles } from './Modal.styles';

export type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  title: string;
};

export const Modal = ({
  children,
  isOpened,
  onClose,
  title,
}: PropsWithChildren<ModalProps>) => {
  const ref = useClickAway<HTMLDivElement>(isOpened, onClose);

  if (!isOpened) {
    return null;
  }

  return (
    <div css={styles.overlay}>
      <div css={styles.modal} ref={ref}>
        <header css={styles.header}>
          <Typography variant="subtitle1">{title}</Typography>

          <Button
            icon="close"
            iconSize="medium"
            onClick={onClose}
            size="small"
            variant="light"
          />
        </header>

        <div css={styles.content}>{children}</div>
      </div>
    </div>
  );
};
