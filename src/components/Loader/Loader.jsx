import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/root/selectors';

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;