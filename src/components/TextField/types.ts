import { ChangeEvent, HTMLProps } from 'react';

export type TextFieldProps = {
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
} & HTMLProps<HTMLInputElement>;
