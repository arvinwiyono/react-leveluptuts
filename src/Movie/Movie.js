import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export default class Movie extends Component {
  static defaultProps = {
    desc: {
      short: 'Short description not available',
      long: 'Long description not available'
    }
  }

  render() {
    const {movie} = this.props;
    return (<div>
      <h3>{movie.title}</h3>
      <p className="Movie-year">{movie.year}</p>
      <p className="Movie-shortDescription">{this.props.desc.short}</p>
    </div>)
  }
}
// Can be written this way instead of as a static method
Movie.propTypes = {
  movie: PropTypes.shape({title: PropTypes.string.isRequired, year: PropTypes.number.isRequired}),
  desc: PropTypes.shape({short: PropTypes.string, long: PropTypes.string})
}
