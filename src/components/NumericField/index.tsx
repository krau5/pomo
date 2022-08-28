import { h } from 'preact';
import { ChangeEvent } from 'preact/compat';
import './NumericField.css';

type Props = {
  name: string;
  onChange?: (event: ChangeEvent) => void;
  value: number;
}

export const NumericField = ({ name, onChange, value }: Props) => (
  <input className="numeric-field" name={name} onChange={onChange} value={value} type="number" />
)
