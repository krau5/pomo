import { RegisterOptions, useController } from 'react-hook-form';
import { TextField, TextFieldProps } from 'components/TextField';
import { ChangeEvent, forwardRef, useCallback } from 'react';

type FormTextFieldProps = Omit<TextFieldProps, 'name'> & {
  defaultValue?: string;
  name: string;
  rules?: RegisterOptions;
};

export const FormTextField = forwardRef<HTMLInputElement, FormTextFieldProps>(
  ({ defaultValue, name, onChange, rules, ...props }, ref) => {
    const { field } = useController({ name, defaultValue, rules });

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        field.onChange(event);
        onChange && onChange(event);
      },
      [field, onChange]
    );

    return (
      <TextField {...field} {...props} onChange={handleChange} ref={ref} />
    );
  }
);
