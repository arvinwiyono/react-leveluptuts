import React from 'react';
import PropTypes from 'prop-types';

export default function MovieDetail({ match }) {
  return (
    <h1>{match.params.movie_id}</h1>
  );
}

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movie_id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
