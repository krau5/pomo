import { useCallback, useState } from 'react';
import { Button } from 'ui/Button';
import { SettingsModal } from './SettingsModal';

export const Settings = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <>
      <Button
        aria-label="Open settings"
        icon="dots"
        onClick={handleOpen}
        variant="secondary"
      />

      <SettingsModal isOpened={isOpened} onClose={handleClose} />
    </>
  );
};
