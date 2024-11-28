import { Button } from 'components/Button';
import { useOpen } from 'hooks';
import { SettingsModal } from './SettingsModal';

export const Settings = () => {
  const { isOpened, open, close } = useOpen();

  return (
    <>
      <Button
        aria-label="Open settings"
        icon="dots"
        onClick={open}
        variant="secondary"
      />

      <SettingsModal isOpened={isOpened} onClose={close} />
    </>
  );
};
