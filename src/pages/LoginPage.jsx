import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const dispatch = useDispatch();

  const handleValueChange = e => {
    const field = e.target;
    setUser({ ...user, [field.name]: field.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(user))
      .unwrap()
      .then(() => Notify.success('You are successfully logged in'))
      .catch(() => Notify.failure('Something was wrong :('));
    resetForm();
  };

  const resetForm = () => {
    setUser({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <FormControl as="form" onSubmit={handleSubmit} isRequired>
        <Flex gap="5px" alignItems="center" flexDir="column">
          <FormLabel htmlFor="login-email">Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleValueChange}
            placeholder="Email"
            w="350px"
            focusBorderColor="#9898ff"
            id="login-email"
          />
          <FormLabel htmlFor="login-password">Password</FormLabel>
          <InputGroup w="350px" alignItems="center">
            <Input
              type={show ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleValueChange}
              placeholder="Password"
              focusBorderColor="#9898ff"
              id="login-password"
            />
            <InputRightElement width="4rem">
              <Button
                h="38px"
                size="sm"
                onClick={handleShow}
                backgroundColor="#DFE5E5"
                variant="solid"
                w="62px"
                _hover={{
                  color: 'white',
                  backgroundColor: '#9898ff',
                }}
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            type="submit"
            color="white"
            backgroundColor="#9898ff"
            variant="solid"
            w="100px"
            mt="30px"
            _hover={{
              color: 'black',
              backgroundColor: '#DFE5E5',
            }}
          >
            Login
          </Button>
        </Flex>
      </FormControl>
    </>
  );
};

export default LoginPage;
