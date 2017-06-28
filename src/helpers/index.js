import PHOTO_DATA from '../photos';

export function dateParser(dateInUnixTime) {
  return new Date(dateInUnixTime * 1000).toLocaleString();
}

export function tagParser(tags) {
  if (tags.length === 0) {
    return "None";
  }

  return `#${tags.join(' #')}`;
}

export function getFilters() {
  let filtersSet = new Set();
  PHOTO_DATA.forEach(photo => {
    filtersSet.add(photo.filter);
  });

  return Array.from(filtersSet);
}