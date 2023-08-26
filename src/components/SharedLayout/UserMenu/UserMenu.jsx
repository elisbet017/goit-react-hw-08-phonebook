import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { Avatar, Button, Flex } from '@chakra-ui/react';
import { Notify } from 'notiflix';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => Notify.success('You are successfully logged out'))
      .catch(() => Notify.failure('Something was wrong :('));
  }
  return (
    <Flex justify="end" gap="15px" align="center">
      <Avatar src="https://bit.ly/broken-link" w="40px" h="40px" />
      <p>{email}</p>
      <Button
        type="button"
        color="white"
        backgroundColor="#9898ff"
        variant="solid"
        w="100px"
        h='36px'
        _hover={{
          color: 'black',
          backgroundColor: '#DFE5E5',
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default UserMenu;
