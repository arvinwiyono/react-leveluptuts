import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export default class Movie extends Component {
  static defaultProps = {
    overview: 'Overview not available',
  }

  render() {
    const { movie, overview } = this.props;
    return (<div>
      <h3>{movie.title}</h3>
      <p className="Movie-releaseDate">{movie.release_date}</p>
      <p className="Movie-overview">{overview}</p>
            </div>);
  }
}
// Can be written this way instead of as a static method
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
  overview: PropTypes.string,
};
