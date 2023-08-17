import React from 'react';
import Contact from '../Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(({name}) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <>
      {visibleContacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <ul>
          {visibleContacts.map(contact => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;