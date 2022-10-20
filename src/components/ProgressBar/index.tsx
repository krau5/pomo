import { FunctionComponent, PropsWithChildren } from 'react';
import './ProgressBar.css';

type Props = {
  progress: number;
}

export const ProgressBar: FunctionComponent<PropsWithChildren<Props>> = ({ children, progress = 1 }) => {
  const size = 256;
  const strokeWidth = 10;
  const center = 256 / 2;
  const radius = center - strokeWidth;

  const strokeDashoffset = 2 * 3.14 * radius * ((100 - progress) / 100);
  const strokeDasharray = 2 * 3.14 * radius;

  return (
    <div className="progress-bar">
      <svg className="indicator" width={size} height={size}>
        <circle
          className="track"
          cx={center}
          cy={center}
          r={radius}
        />

        <circle
          className="indication"
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={`${strokeDashoffset}px`}
        />
      </svg>

      <div className="content">{children}</div>
    </div>
  );
};
