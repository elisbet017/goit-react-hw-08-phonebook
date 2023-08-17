import ContactForm from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';
import { Block } from './App.styled';
import { GlobalStyles } from '../utils/GlobalStyles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/operations';

export const App = () => {
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
