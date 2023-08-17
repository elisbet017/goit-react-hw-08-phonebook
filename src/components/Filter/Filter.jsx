import React from 'react';
import { Field, Input } from '../Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

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