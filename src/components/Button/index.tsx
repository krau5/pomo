import { FunctionComponent, h } from "preact";
import './Button.css';

type Props = {
  color?: 'primary' | 'default';
  icon?: string;
  onClick?: () => void;
  size?: 'medium' | 'large';
  type?: 'button' | 'submit';
}

export const Button: FunctionComponent<Props> = ({
  children,
  color,
  icon,
  onClick,
  size= 'medium',
  type = 'button',
}) => {
  if (icon) {
    return (
      <button type={type} className={`button icon-button ${size}`} onClick={onClick}>
        <span className="material-icons" style={{ color: color === 'primary' ? '#F97070' : 'inherit' }}>
          {icon}
        </span>
      </button>
    )
  }

  return <button className="button primary" type={type} onClick={onClick}>{children}</button>
}
