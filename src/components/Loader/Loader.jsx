import { Box, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/root/selectors';

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && (
        <Box pos='fixed' zIndex='323' w='100vw' h='100vh' bgColor='#ffffffad'>
          <Spinner color="#21215d" pos='absolute' top='50%' left='50%' size='lg'/>
        </Box>
      )}
    </>
  );
};

export default Loader;
