import React, { Component } from 'react';
import Movie from './Movie/Movie';
import apiKeys from './apikeys.json';

class MoviesList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeys.tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    try {
      const res = await fetch(discoverURL);
      const movies = await res.json();
      this.setState({ movies: movies.results });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />) }
      </div>
    );
  }
}

export default MoviesList;
