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
import { register } from 'redux/auth/auth-operations';

const RegisterPage = () => {
  const [user, setUser] = useState({
    name: '',
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
    dispatch(register(user))
      .unwrap()
      .then(() => Notify.success('You are successfully registered'))
      .catch(() => Notify.failure('Something was wrong :('));
    resetForm();
  };

  const resetForm = () => {
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
      <FormControl as="form" onSubmit={handleSubmit} isRequired>
        <Flex alignItems="center" flexDir="column" gap="5px">
          <FormLabel htmlFor="register-name">Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={user.name}
            onChange={handleValueChange}
            placeholder="Name"
            w="350px"
            focusBorderColor="#9898ff"
            id="register-name"
          />
          <FormLabel htmlFor="register-email">Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleValueChange}
            placeholder="Email"
            w="350px"
            focusBorderColor="#9898ff"
            id="register-email"
          />
          <FormLabel htmlFor="register-password">Password</FormLabel>
          <InputGroup w="350px">
            <Input
              type={show ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleValueChange}
              placeholder="Password"
              focusBorderColor="#9898ff"
              id="register-password"
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
            Register
          </Button>
        </Flex>
      </FormControl>
  );
};

export default RegisterPage;
