import * as S from './Layout.styled.ts';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <S.Container>
      <main>
        <Outlet />
      </main>
    </S.Container>
  );
}
