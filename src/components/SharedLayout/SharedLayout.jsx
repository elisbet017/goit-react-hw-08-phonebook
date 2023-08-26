import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { Box } from '@chakra-ui/react';

const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box as="header" p="5px 0" mb="10px">
      {isLoggedIn ? (
        <Box as="nav">
          <UserMenu />
        </Box>
      ) : (
        <AuthNav />
      )}
    </Box>
  );
};

export default SharedLayout;
