import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieImage from './../MovieImage';
import './Movie.css';

export default function Movie({ movie }) {
  return (
    <div className="Movie">
      <Link to={`/${movie.id}`}>
        <h3 className="Movie-title">{movie.title}</h3>
        <MovieImage title={movie.title} path={movie.poster_path} />
        <h3 className="Movie-releaseDate">{movie.release_date.split('-')[0]}</h3>
      </Link>
    </div>
  );
}

// Can be written this way instead of as a static method
Movie.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired, release_date: PropTypes.string.isRequired }).isRequired,
};
