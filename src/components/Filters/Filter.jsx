import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import selectFilter from './selectFilter.json';
import { BtnReset, StyledLabel, StyledSelect } from './Filters.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const initialValues = {
    select: 'all',
  };

  const [filterValues, setFilterValues] = useState(initialValues);

  useEffect(() => {
    dispatch(setFilter(filterValues));
  }, [filterValues, dispatch]);

  const inputChange = (propertyName, e) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [propertyName]: e.target.value,
    }));
  };
  const handleFiltersChange = (e) => inputChange('select', e);

  const handleReset = () => setFilterValues(initialValues);

  return (
    <Formik initialValues={filterValues}>
      {() => (
        <Form>
          <StyledLabel>
            Filters
            <StyledSelect
              as="select"
              id="select"
              className="select"
              name="select"
              value={filterValues.select}
              onChange={handleFiltersChange}
            >
              <option value="all">All</option>
              {selectFilter.selects.map((select) => (
                <option key={select} value={select}>
                  {select}
                </option>
              ))}
            </StyledSelect>
          </StyledLabel>

          <BtnReset type="button" onClick={handleReset}>
            Reset
          </BtnReset>
        </Form>
      )}
    </Formik>
  );
};
