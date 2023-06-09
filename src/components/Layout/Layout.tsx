import * as S from './Layout.styled.ts';
import { Outlet } from 'react-router-dom';
import TabBar from '../TabBar';

export default function Layout() {
  return (
    <S.Container>
      <main>
        <Outlet />
      </main>
      <TabBar />
    </S.Container>
  );
}
