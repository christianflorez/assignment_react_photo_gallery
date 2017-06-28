import React from 'react';
import IgDetail from './elements/IgDetail';
import {dateParser, tagParser} from '../helpers';

const Photo = (props) => {
  const {
    src, 
    user, 
    date, 
    likes, 
    comments, 
    photoUrl, 
    userUrl,
    filter,
    tags
  } = props;

  const parsedDate = dateParser(date);
  const parsedTags = tagParser(tags);
  return (
    <div className="col-md-4">
      <div className="col-md-12 well photos">
        <a href={photoUrl}>
          <img className="img-responsive" src={src} alt=""/>
        </a>
        <IgDetail label="Posted By" data={<a href={userUrl}>{user}</a>} />
        <IgDetail label="Date" data={parsedDate} />
        <IgDetail label="Likes" data={likes} />
        <IgDetail label="Comments" data={comments} />
        <IgDetail label="Filter" data={filter} />
        <IgDetail label="Tags" data={parsedTags} />
      </div>
    </div>
  )
};

export default Photo;