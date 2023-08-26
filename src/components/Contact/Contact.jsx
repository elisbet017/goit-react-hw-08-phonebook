import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Notify } from 'notiflix';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <Flex justify="center" gap="32px" mb="12px">
      <Text color="#0F0F0F" fontSize="17px" textAlign="start">
        {name}: {number}
      </Text>
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id))
            .unwrap()
            .then()
            .catch(() => Notify.failure('Something was wrong :('));
        }}
        color="black"
        bgGradient=" linear-gradient(135deg, rgba(223, 229, 229, 1) 0%, rgba(223, 229, 229, 1) 100%)"
        variant="solid"
        w="72px"
        h="32px"
        _hover={{
          color: 'white',
          bgGradient:
            'linear-gradient(135deg, rgba(152,152,255,1) 0%, rgba(120,255,247,1) 100%)',
        }}
      >
        Delete
      </Button>
    </Flex>
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
