import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/Form';
import ContactList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Flex, Text } from '@chakra-ui/react';


const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <>
      <Text
        as="h1"
        color="#9898ff"
        fontSize="52px"
        fontWeight="800"
        textAlign="center"
        mb="20px"
      >
        Phonebook
      </Text>
      <ContactForm />
      <Flex justify="center" border="dotted 3px #9898ffb5" borderRadius='12px' flexDir="column" w='390px' m='0 auto 30px' p='30px 10px' gap='15px'>
        <Text
          as="h2"
          backgroundImage="linear-gradient(90deg, #8e8ef6 0%, #87fef7 100%)"
          backgroundClip="text"
          fontSize="24px"
          fontWeight="700"
          textAlign="center"
        >
          Contacts
        </Text>
        <Filter />
        <ContactList />
      </Flex>
    </>
  );
};

export default HomePage;
