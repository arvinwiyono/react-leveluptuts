import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w200';

export default function Movie({ movie, overview }) {
  return (
    <div>
      <img src={ `${POSTER_PATH}/${movie.poster_path}` }></img>
      <h3>{movie.title}</h3>
      <p className="Movie-releaseDate">{movie.release_date}</p>
      <p className="Movie-overview">{overview}</p>
    </div>
  );
}

Movie.defaultProps = {
  overview: 'Overview not available',
};

// Can be written this way instead of as a static method
Movie.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired, release_date: PropTypes.string.isRequired }).isRequired,
  overview: PropTypes.string,
};
