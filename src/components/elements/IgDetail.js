import React from 'react';

const IgDetail = ({label, data}) => {
  return (
     <p>
      <strong>{label}: </strong> 
      {data}
    </p>
  )
};

export default IgDetail;