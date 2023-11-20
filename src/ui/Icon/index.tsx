import { ReactNode } from 'react';
import { Break } from './static/Break';
import { Close } from './static/Close';
import { Dots } from './static/Dots';
import { Focus } from './static/Focus';
import { Forward } from './static/Forward';
import { Pause } from './static/Pause';
import { Play } from './static/Play';
import { styles } from './Icon.styles';
import { IconNames, IconProps } from './types';

const icons: Record<IconNames, ReactNode> = {
  break: <Break />,
  close: <Close />,
  dots: <Dots />,
  focus: <Focus />,
  forward: <Forward />,
  pause: <Pause />,
  play: <Play />,
};

export const Icon = ({ color, name, size = 'large' }: IconProps) => (
  <span className="icon" css={styles(color, size)}>
    {icons[name]}
  </span>
);

export * from './types';
