import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import apiKeys from './../apikeys.json';
import MovieImage from './../MovieImage';

const IMAGE_ROOT_PATH = 'http://image.tmdb.org/t/p';
const BACKDROP_PATH = `${IMAGE_ROOT_PATH}/w1280`;

export default class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
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
      <MovieWrapper backdrop={BACKDROP_PATH + movie.backdrop_path}>
        <MovieInfo>
          <MovieImage title={movie.title} path={movie.poster_path} />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
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

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 40px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
