import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from '../Movie/Movie';

export class MoviesList extends React.Component {
  componentWillUnmount() {
    //console.log('me he desmontado');
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="list-articles">
        {movies.map(movie => {
          return (
            <Movie
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              id={movie.imdbID}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array
};
