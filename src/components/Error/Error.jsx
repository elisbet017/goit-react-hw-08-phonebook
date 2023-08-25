import { useSelector } from 'react-redux';
import { selectError } from 'redux/root/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Error = () => {
  const error = useSelector(selectError);

  // return error && Notify.failure('Sorry, something was wrong');
};

export default Error;
