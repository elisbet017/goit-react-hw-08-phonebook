import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <ButtonDelete
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
