import { useCallback, useState } from 'react';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { SettingsForm } from './SettingsForm';

export const Settings = () => {
  const [isOpened, setOpened] = useState(false);

  const handleClick = useCallback(() => {
    setOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <div className="settings">
      <Button icon="settings" onClick={handleClick} />

      {isOpened && (
        <Modal onClose={handleClose} title="Settings">
          <SettingsForm onSubmit={handleClose} />
        </Modal>
      )}
    </div>
  );
};
