import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from '../Movie/Movie';

export class MoviesList extends React.Component {
  static propTypes = {
    movies: PropTypes.array
  };

  // Utilizamos el state de results y devolver el mapeado que hacemos para cada una de las peliculas que tiene el array
  render() {
    // Extraemos los results del state del componente
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
            />
          );
        })}
      </div>
    );
  }
}
