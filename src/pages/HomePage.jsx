import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/Form';
import ContactList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Block } from 'components/App.styled';
import { GlobalStyles } from 'utils/GlobalStyles';


const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <Block>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyles />
    </Block>
  );
};

export default HomePage;
