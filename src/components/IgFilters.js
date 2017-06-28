import React from 'react';
import {getFilters} from '../helpers';
import Select from './elements/Select';

const IgFilters = ({photos}) => {
  const filters = getFilters();
  return (
    <div className="form-group">
      <label htmlFor="IgFilters">Instagram Filters</label>
      <Select
        name="IgFilters"
        options={filters}
      />
    </div>
  );
};

export default IgFilters;