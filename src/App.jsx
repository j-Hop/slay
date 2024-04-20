import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout';
import { lazy } from 'react';
import { PrivatRoute } from './components/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const NanniesPage = lazy(() => import('./pages/NanniesPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nannies" element={<NanniesPage />} />
        <Route
          path="favorites"
          element={
            <PrivatRoute>
              <FavoritePage />
            </PrivatRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
