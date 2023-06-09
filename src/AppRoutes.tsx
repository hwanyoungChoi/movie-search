import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./components/Layout'));
const SearchPage = lazy(() => import('./pages/search'));
const FavoritesPage = lazy(() => import('./pages/favorites'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
