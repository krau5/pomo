import { h } from 'preact';
import './NumericField.css';
import { ChangeEvent } from "preact/compat";

type Props = {
  name: string;
  onChange?: (event: ChangeEvent) => void;
  value: number;
}

export const NumericField = ({ name, onChange, value }: Props) => (
  <input className="numeric-field" name={name} onChange={onChange} value={value} type="number" />
)
