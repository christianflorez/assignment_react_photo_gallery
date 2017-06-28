import React, { Component } from 'react';
import Gallery from './Gallery';
import Filterables from './Filterables';
import DATA from '../photos';

/*
  Header

  FilterableGallery < state holder
    Filterables
      Filter by Filter...?
      Sort by date posted
      Search by term
      Results Count
    Gallery
      Details (Filter, Likes, Comments)
    Pagination
      Forward
      Back


  To Do:

  FIRSTLY, make pagination buttons
  THEN, try to get searching via IgFilter to work
  THEN, get results count to work
  THEN, try to get pagination to work
  THEN, get search bar and date sorter to work
  FINALLY, get IgDetails to sort
*/

class FilterableGallery extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <h1>React Photo Gallery</h1>
        </div>
        <Filterables />
        <Gallery photos={DATA}/>
      </div>
    );
  }
}
export default FilterableGallery;