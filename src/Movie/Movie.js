import React, {Component} from 'react';
import './Movie.css';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.movie = this.props.movie;
  }

  render() {
    return (
      <div>
        <h3>{this.movie.title}</h3>
        <p className="Movie-year">{this.movie.year}</p>
      </div>
    )
  }
}
