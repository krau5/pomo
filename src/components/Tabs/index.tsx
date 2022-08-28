import { h } from 'preact';
import './Tabs.css';

type Tab = {
  id: string;
  name: string;
}

type Props = {
  tabs: Tab[];
  activeTab?: string;
}

export const Tabs = ({ tabs, activeTab }: Props) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          className="tab"
          style={{
            width: `calc((100% - ${tabs.length - 1} * 8px) / ${tabs.length})`,
            background: tab.id === activeTab ? '#F97070' : 'transparent',
            color: tab.id === activeTab ? '#FAFAFA' : 'inherit'
          }}
        >
          {tab.name}
        </div>
      ))}
    </div>
  )
}
