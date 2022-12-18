import { ChangeEvent, useCallback, useState } from 'react';
import { TextFieldProps } from 'components/TextField';
import { styles } from './Switch.styles';

export const Switch = ({
  defaultChecked = false,
  onChange,
  name,
  ...props
}: TextFieldProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      onChange && onChange(event);
    },
    [onChange]
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
