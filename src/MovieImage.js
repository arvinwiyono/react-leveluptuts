import React from 'react';
import PropTypes from 'prop-types';

const IMAGE_ROOT_PATH = 'http://image.tmdb.org/t/p';
const POSTER_PATH = `${IMAGE_ROOT_PATH}/w200`;
const BACKDROP_PATH = `${IMAGE_ROOT_PATH}/w1280`;

function MovieImage(props) {
  const { title, path, backdrop } = props;
  const imagePath = backdrop ? `${BACKDROP_PATH}${path}` : `${POSTER_PATH}${path}`;
  return (
    <img src={imagePath} alt={`${title} Poster`} class={ backdrop ? 'Movie-backdrop' : 'Movie-poster' }/>
  );
}

MovieImage.defaultProps = {
  backdrop: false,
};

MovieImage.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  backdrop: PropTypes.bool,
};

export default MovieImage;
