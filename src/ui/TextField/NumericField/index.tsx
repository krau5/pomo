import { ChangeEvent, FocusEvent, useCallback } from 'react';
import { TextFieldProps } from '../types';
import { styles } from './NumericField.styles';

export const NumericField = ({
  name,
  onChange,
  min,
  max,
  ...props
}: TextFieldProps) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*)\./g, '$1');

      if (onChange) {
        onChange({ ...event, target: { ...event.target, value } });
      }
    },
    [onChange]
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      let fieldValue = event.target.value;

      if (min && Number(fieldValue) < Number(min)) {
        fieldValue = min.toString();
      }

      if (max && Number(fieldValue) > Number(max)) {
        fieldValue = max.toString();
      }

      if (onChange) {
        onChange({ ...event, target: { ...event.target, value: fieldValue } });
      }
    },
    [max, min, onChange]
  );

  return (
    <input
      {...props}
      css={styles.field}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      inputMode="numeric"
      type="text"
    />
  );
};
