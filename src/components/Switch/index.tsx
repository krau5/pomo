import { TextFieldProps } from 'components/TextField';
import { ChangeEvent, useCallback, useState } from 'react';
import { styles } from './Switch.styles';

export const Switch = ({ onChange, name, ...props }: TextFieldProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      onChange && onChange(event);
    },
    [onChange]
  );

  console.log('Checked:', isChecked);

  return (
    <>
      <div css={styles.container(isChecked)}>
        <div css={styles.indicator(isChecked)} />

        <input
          css={styles.input}
          type="checkbox"
          onChange={handleChange}
          name={name}
          {...props}
        />
      </div>
    </>
  );
};
