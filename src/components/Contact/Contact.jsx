import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const Contact = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <p>
        {name}: {phone}
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
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
