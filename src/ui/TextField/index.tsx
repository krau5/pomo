import { TextFieldProps } from './types';
import { NumericField } from './NumericField';
import { styles } from './TextField.styles';

export const TextField = (props: TextFieldProps) => {
  if (props.type === 'number') {
    return <NumericField {...props} />;
  }

  return <input css={styles.field} type="text" {...props} />;
};

export * from './types';
