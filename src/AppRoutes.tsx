import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const SearchPage = lazy(() => import('./pages/search'));
const FavoritesPage = lazy(() => import('./pages/favorites'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={SearchPage} />
        <Route path="/favorites" Component={FavoritesPage} />
      </Routes>
    </BrowserRouter>
  );
}
