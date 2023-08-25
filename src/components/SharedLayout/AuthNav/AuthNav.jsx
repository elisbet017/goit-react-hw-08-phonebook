import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <Flex gap="20px" justify="center">
      <ChakraLink as={NavLink} to="/register">Registration</ChakraLink>
      <ChakraLink as={NavLink} to="/login">Login</ChakraLink>
    </Flex>
  );
};

export default AuthNav;
