import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <SharedLayout />
      <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<HomePage />} />
      </Routes>
    </>
  );
};
// лоадер додати
// в аус-слайсі додати обробку помилок і пендінга через матчер
// обробити помилки
// почистити папки
// почистити код