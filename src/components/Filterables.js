import React from 'react';
import IgFilters from './IgFilters';
import DateSorter from './DateSorter';
import SearchTerm from './SearchTerm';

const Filterables = ({onChangeInput, onDateClick, dateSortDirection, searchTerm}) => (
  <div className="row well">
    <h3>Sort Your Results</h3>
    <div className="col-md-3">
      <IgFilters
        onChangeInput={onChangeInput}
      />
    </div>
    <div className="col-md-3">
      <SearchTerm 
        onChangeInput={onChangeInput}
        searchTerm={searchTerm}
      />
    </div>
    <div className="col-md-3">
      <DateSorter 
        onDateClick={onDateClick}
        dateSortDirection={dateSortDirection}
      />
    </div>
  </div>
);

export default Filterables;