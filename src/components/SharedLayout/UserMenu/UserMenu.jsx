import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { Avatar, Flex } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <Flex justify="end" gap="20px" align='center'>
      <Avatar src="https://bit.ly/broken-link" w='40px' h='40px'/>
      <p>{email}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Flex>
  );
};

export default UserMenu;
