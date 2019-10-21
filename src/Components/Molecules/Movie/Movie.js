import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Image } from '../../Atoms/Image/Image';

import './Movie.css';

export class Movie extends React.Component {
  render() {
    const { title, year, poster, id } = this.props;
    return (
      <article className="movie">
        <Link to={`/detail/${id}`}>
          <Image className="movie__image">
            <img src={poster} alt={title} />
          </Image>

          <div className="movie__content">
            <h3 className="movie__title">{title}</h3>
            <p className="movie__text">{year}</p>
          </div>
        </Link>
      </article>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string,
  id: PropTypes.string
};
