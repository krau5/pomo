import type { Ref } from 'react';
import { useEffect, useRef } from 'react';

export const useClickAway = <T extends HTMLElement>(
  isOpen: boolean,
  onClickAway: () => void,
): Ref<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClickAway]);

  return ref;
};
