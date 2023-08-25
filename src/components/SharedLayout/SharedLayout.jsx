import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import { Box } from '@chakra-ui/react';

const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box as='header' mb='15px'>
      {isLoggedIn ? (
        <>
          <Navigation />
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </Box>
  );
};

export default SharedLayout;
