import { useCallback, useState } from 'react';

export const useOpen = (initiallyOpened: boolean = false) => {
  const [isOpened, setIsOpened] = useState(initiallyOpened);

  const open = useCallback(() => {
    setIsOpened(true);
  }, []);

  const close = useCallback(() => {
    setIsOpened(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, []);

  return { isOpened, open, close, toggle };
};
