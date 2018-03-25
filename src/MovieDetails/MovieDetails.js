import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKeys from './../apikeys.json';
import MovieImage from './../MovieImage';

export default class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try{
      const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKeys.tmdb}&language=en-US`;
      const res = await fetch(movieDetailsUrl);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <React.Fragment>
        <h1>{movie.title}</h1>
        <MovieImage title={movie.title} path={movie.poster_path} />
        <MovieImage title={movie.title} path={movie.backdrop_path} backdrop />
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </React.Fragment>
    );
  }
}

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
