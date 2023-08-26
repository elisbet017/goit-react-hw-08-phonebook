import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter-slice';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { Flex, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Flex flexDir='column' align='center' gap='10px'>
      <FormLabel htmlFor="filter" m='0'>Find contact by name</FormLabel>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
        w="350px"
        id="filter"
        placeholder="Name"
        focusBorderColor="#9898ff"
      />
    </Flex>
  );
};
export default Filter;
