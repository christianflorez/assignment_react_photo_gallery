import React from 'react';

const IgSortable = ({label, data, onClick}) => {
  return (
     <p>
      <a href="asd" onClick={onClick} value={label}>
        <strong>{label}: </strong> 
      </a>
      {data}
    </p>
  )
};

export default IgSortable;