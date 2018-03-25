import React from 'react';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';
import MovieImage from './../MovieImage';
import './Movie.css';

const IMAGE_ROOT_PATH = 'http://image.tmdb.org/t/p';
const POSTER_PATH = `${IMAGE_ROOT_PATH}/w200`;

export default function Movie({ movie }) {
  return (
    <div className="Movie">
      <Link to={`/${movie.id}`}>
        <h3 className="Movie-title">{movie.title}</h3>
        <Overdrive id={movie.id} duration={800}>
          <img src={POSTER_PATH + movie.poster_path}/>
        </Overdrive>
        <h3 className="Movie-releaseDate">{movie.release_date.split('-')[0]}</h3>
      </Link>
    </div>
  );
}

// Can be written this way instead of as a static method
Movie.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired, release_date: PropTypes.string.isRequired }).isRequired,
};
