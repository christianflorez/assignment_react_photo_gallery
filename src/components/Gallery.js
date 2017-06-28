import React, { Component } from 'react';
import Photo from './Photo';

class Gallery extends Component {
  render() {
    const { photos } = this.props;
    // slice will take care of pagination, use 
    // state "start" and "end" instead of "0, 6"
    const photoElements = photos.slice(0, 6).map(photo => (
      <Photo 
        key={photo.id}
        src={photo.images.standard_resolution.url}
        user={photo.user.username}
        date={photo.created_time}
        likes={photo.likes.count}
        comments={photo.comments.count}
        photoUrl={photo.link}
        filter={photo.filter}
        tags={photo.tags}
        userUrl={`https://instagram.com/${photo.user.username}`}
      />
    ));
    return(
      <div className="row">
        {photoElements}
      </div>
    );
  }
};

export default Gallery;