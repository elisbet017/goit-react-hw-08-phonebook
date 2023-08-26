import { Button, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Flex gap="30px" justify="center" align="center">
      <Button
        as={NavLink}
        to="/register"
        h="30px"
        backgroundColor="#fff"
        _hover={{
          color: 'black',
          bgGradient:
            'linear-gradient(135deg, rgba(152,152,255,1) 0%, rgba(120,255,247,1) 100%)',
        }}
      >
        Registration
      </Button>
      <Button
        as={NavLink}
        to="/login"
        h="30px"
        backgroundColor="#fff"
        _hover={{
          color: 'black',
          bgGradient: 'linear-gradient(135deg, rgba(152,152,255,1) 0%, rgba(120,255,247,1) 100%)',
        }}
      >
        Login
      </Button>
    </Flex>
  );
};

export default AuthNav;
