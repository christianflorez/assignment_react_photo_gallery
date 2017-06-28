import React from 'react';
import IgDetail from './elements/IgDetail';
import IgSortable from './IgSortable';
import {dateParser, tagParser, parseCaption} from '../helpers';

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
    tags,
    caption,
    onSortableClick
  } = props;

  const parsedDate = dateParser(date);
  const parsedTags = tagParser(tags);
  const parsedCaption = parseCaption(caption);
  return (
    <div className="col-md-4">
      <div className="col-md-12 well photos">
        <a href={photoUrl}>
          <img className="img-responsive" src={src} alt=""/>
        </a>
        <IgDetail label="Posted By" data={<a href={userUrl}>{user}</a>} />
        <IgDetail label="Date" data={parsedDate} />
        <IgSortable label="Likes" data={likes} onClick={onSortableClick}/>
        <IgSortable label="Comments" data={comments} onClick={onSortableClick}/>
        <IgDetail label="Filter" data={filter} />
        <IgDetail label="Tags" data={parsedTags} />
        <IgDetail label="Caption" data={parsedCaption} />
      </div>
    </div>
  )
};

export default Photo;