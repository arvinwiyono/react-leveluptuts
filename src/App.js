import React, {Component} from 'react';
import Movie from './Movie/Movie';
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'Avengers: Infinity Wars',
    year: 2018
  }, {
    id: 2,
    title: 'Pacific Rim Uprising',
    year: 2018
  }, {
    id: 3,
    title: 'Star Wars: The Last Jedi',
    year: 2017
  }
]

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
    </div>);
  }
}

export default App;
