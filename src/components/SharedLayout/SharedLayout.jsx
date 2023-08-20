import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      {isLoggedIn ? (
        <>
          <Navigation />
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
};
