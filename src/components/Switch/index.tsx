import { ChangeEvent, HTMLProps, useCallback, useState } from 'react';
import { styles } from './Switch.styles';

type Props = HTMLProps<HTMLInputElement>;

export const Switch = ({
  defaultChecked = false,
  onChange,
  name,
  ...props
}: Props) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);

      if (onChange) {
        onChange(event);
      }
    },
    [onChange],
  );

  return (
    <>
      <div css={styles.container(isChecked)}>
        <div css={styles.indicator(isChecked)} />

        <input
          css={styles.input}
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
          name={name}
          {...props}
        />
      </div>
    </>
  );
};
