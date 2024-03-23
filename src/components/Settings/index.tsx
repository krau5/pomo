import { useCallback, useState } from 'react';
import { Button } from 'components/Button';
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
        data-testid="open-settings"
      />

      <SettingsModal isOpened={isOpened} onClose={handleClose} />
    </>
  );
};
