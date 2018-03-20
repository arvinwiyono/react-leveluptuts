import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Movie from './Movie/Movie';
import logo from './logo.svg';
import apiKeys from './apikeys.json';
import './App.css';

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeys.tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018`;
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
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/test" component={Test} />
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} overview={movie.overview} />) }
        </div>
      </Router>
    );
  }
}

export default App;

const Test = () => {
  return <div>Hello :)</div>
}
