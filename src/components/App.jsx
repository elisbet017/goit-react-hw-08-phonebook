import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/auth-operations';
import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import { PrivateRoute } from './SharedLayout/PrivateRoute';
import PublicRoute from './SharedLayout/PublicRoute';

// const HomePage = lazy(() => import('pages/HomePage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const Loader = lazy(() => import('./Loader'));
// const Error = lazy(() => import('./Error'));
// const SharedLayout = lazy(() => import('./SharedLayout'))

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <SharedLayout />
      <Loader />
      <Error />
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
// лоадер пофіксити
// обробити помилки
// почистити папки
// почистити код
