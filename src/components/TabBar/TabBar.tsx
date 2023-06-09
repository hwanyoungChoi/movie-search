import * as S from './TabBar.styled.ts';
import { Link } from 'react-router-dom';
import { PATHS } from '../../lib/routes.ts';
import { useState } from 'react';
interface TabItem {
  label: string;
  path: string;
}

const TAB_ITEMS: TabItem[] = [
  {
    label: '검색',
    path: PATHS.Home,
  },
  {
    label: '즐겨찾기',
    path: PATHS.Favorites,
  },
];

export default function TabBar() {
  const [selectedTab, setSelectedTab] = useState<string>(
    window.location.pathname,
  );

  return (
    <S.Container>
      {TAB_ITEMS.map((item) => (
        <Link to={item.path} replace key={item.path}>
          <S.Tab
            onClick={() => setSelectedTab(item.path)}
            isActive={item.path === selectedTab}
          >
            {item.label}
          </S.Tab>
        </Link>
      ))}
    </S.Container>
  );
}
