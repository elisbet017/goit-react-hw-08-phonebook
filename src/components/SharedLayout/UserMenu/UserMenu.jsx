import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <div>
      <p>{email}</p>
      <button type='button' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
