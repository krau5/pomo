import { FunctionComponent, PropsWithChildren } from 'react';
import { styles } from './ProgressBar.styles';

type Props = {
  progress: number;
};

export const ProgressBar: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  progress = 1,
}) => {
  const size = 256;
  const strokeWidth = 10;
  const center = 256 / 2;
  const radius = center - strokeWidth;

  const strokeDashoffset = 2 * 3.14 * radius * ((100 - progress) / 100);
  const strokeDasharray = 2 * 3.14 * radius;

  return (
    <div css={styles.progressBar}>
      <svg className="indicator" width={size} height={size}>
        <circle css={styles.circle()} cx={center} cy={center} r={radius} />

        <circle
          css={styles.circle(true)}
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={`${strokeDashoffset}px`}
        />
      </svg>

      <div css={styles.content}>{children}</div>
    </div>
  );
};
