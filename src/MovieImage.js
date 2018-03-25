import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IMAGE_ROOT_PATH = 'http://image.tmdb.org/t/p';
const POSTER_PATH = `${IMAGE_ROOT_PATH}/w200`;
const BACKDROP_PATH = `${IMAGE_ROOT_PATH}/w1280`;

function MovieImage(props) {
  const { title, path, backdrop } = props;
  const imagePath = backdrop ? `${BACKDROP_PATH}${path}` : `${POSTER_PATH}${path}`;
  return (
    <ImageWrapper>
      <img src={imagePath} alt={`${title} Poster`} class={ backdrop ? 'Movie-backdrop' : 'Movie-poster' }/>
    </ImageWrapper>
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

const ImageWrapper = styled.div `
  > img.Movie-poster{
    height: 284px;
    width: 200px;
  }
`
