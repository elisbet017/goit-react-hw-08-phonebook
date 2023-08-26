import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/auth-operations';
import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import { PrivateRoute } from './SharedLayout/PrivateRoute';
import PublicRoute from './SharedLayout/PublicRoute';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Loader />
      <SharedLayout />
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
// обробити помилки після діспачу
// почистити папки
// почистити код
