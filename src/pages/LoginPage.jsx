import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const handleValueChange = e => {
    switch (e.target.name) {
      case 'email': {
        setEmail(e.target.value);
        break;
      }
      case 'password': {
        setPassword(e.target.value);
        break;
      }
        default: return
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleValueChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleValueChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage
