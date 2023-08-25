import {
  Button,
  Flex,
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
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup gap="20px" justifyContent="center">
          <label>
            Name
            <Input
              type="text"
              name="name"
              value={user.name}
              onChange={handleValueChange}
              placeholder="Name"
            />
          </label>
          <label>
            Email
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleValueChange}
              placeholder="Email"
            />
          </label>
          <label>
            Password
            <Input
              type={show ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleValueChange}
              placeholder="Password"
            />
          </label>
          <InputRightElement width="4rem">
            <Button h="40px" size="sm" onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
