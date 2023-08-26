import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';
import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onChangeInputValue = e => {
    const field = e.target;
    setContact({
      ...contact,
      [field.name]: field.value,
    });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const isExisted = contacts.find(
      isContact => isContact.name === contact.name
    );
    reset();
    if (isExisted) {
      return Notify.warning(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
  };

  const reset = () => {
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <FormControl onSubmit={onSubmitForm} as="form" mb="30px">
      <Flex alignItems="center" flexDir="column" gap="10px">
        <FormLabel htmlFor="contact-name" m="0">
          Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          value={contact.name}
          onChange={onChangeInputValue}
          pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Jason"
          w="350px"
          focusBorderColor="#9898ff"
          id="contact-name"
          required
        />
        <FormLabel htmlFor="contact-number" m="0">
          Number
        </FormLabel>
        <Input
          type="tel"
          name="number"
          value={contact.number}
          onChange={onChangeInputValue}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="333-33-33"
          w="350px"
          focusBorderColor="#9898ff"
          id="contact-number"
          required
        />
        <Button
          type="submit"
          color="white"
          backgroundColor="#9898ff"
          variant="solid"
          w="130px"
          mt="30px"
          _hover={{
            color: 'black',
            backgroundColor: '#DFE5E5',
          }}
        >
          Add contact
        </Button>
      </Flex>
    </FormControl>
  );
};

export default ContactForm;
