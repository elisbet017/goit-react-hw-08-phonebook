import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({children}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? <Navigate to='/contacts'/> : children}
    </>
  )
}

export default PublicRoute
