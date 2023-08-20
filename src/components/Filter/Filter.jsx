import React from 'react';
import { Field, Input } from '../Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter-slice';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Field>
      Find contact by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </Field>
  );
};
export default Filter;
