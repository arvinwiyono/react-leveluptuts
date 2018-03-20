import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export default function Movie({ movie, overview }) {
  return (
    <div>
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
