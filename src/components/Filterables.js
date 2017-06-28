/*
  Filterables
    Filter by Filter...?
    Sort by date posted
    Search by term
    Results Count
*/

import React from 'react';
import IgFilters from './IgFilters';

const Filterables = ({photos}) => (
  <div className="row well">
    <h3>Sort Your Results</h3>
    <div className="col-md-3">
      <IgFilters />
    </div>
    {/*<DateSorter />*/}
    {/*<SearchTermSorter />*/}
    {/*<ResultsCount />*/}
  </div>
);

export default Filterables;