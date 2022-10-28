import { styles } from './Tabs.styles';

type Tab = {
  id: string;
  name: string;
}

type Props = {
  tabs: Tab[];
  activeTab?: string;
}

export const Tabs = ({ tabs, activeTab }: Props) => (
  <div css={styles.tabs}>
    {tabs.map((tab) => (
      <div css={styles.tab(tab.id === activeTab, tabs.length)} key={tab.id}>
        {tab.name}
      </div>
    ))}
  </div>
);
