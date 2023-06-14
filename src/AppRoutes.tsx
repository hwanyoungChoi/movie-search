import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { PATHS } from 'lib/routes.ts';

const Layout = lazy(() => import('components/Layout'));
const SearchPage = lazy(() => import('pages/search'));
const FavoritesPage = lazy(() => import('pages/favorites'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.Home} element={<SearchPage />} />
          <Route path={PATHS.Favorites} element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
