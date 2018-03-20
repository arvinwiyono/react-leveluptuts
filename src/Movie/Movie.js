import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w200';

export default function Movie({ movie }) {
  return (
    <div className="Movie">
      <Link to={`/${movie.id}`}>
        <img src={ `${POSTER_PATH}/${movie.poster_path}` } />
        <h3 className="Movie-title">{movie.title}</h3>
        <p className="Movie-releaseDate">{movie.release_date.split('-')[0]}</p>
      </Link>
    </div>
  );
}

// Can be written this way instead of as a static method
Movie.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired, release_date: PropTypes.string.isRequired }).isRequired,
};
