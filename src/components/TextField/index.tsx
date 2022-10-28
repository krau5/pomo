import { ChangeEvent, HTMLProps } from 'react';
import { styles } from './TextField.styles';

export type TextFieldProps = {
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
} & HTMLProps<HTMLInputElement>;

export const TextField = ({
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
  ...props
}: TextFieldProps) => (
  <input
    css={styles.textField}
    name={name}
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
    {...props}
  />
);
