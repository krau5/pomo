import { TextFieldProps } from './types';
import { NumericField } from './NumericField';

export const TextField = (props: TextFieldProps) => {
  if (props.type === 'number') {
    return <NumericField {...props} />;
  }

  return null;
};

export * from './types';
