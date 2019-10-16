import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export class Movie extends React.Component {
  render() {
    const { title, year, poster, id } = this.props;
    return (
      <article className="card">
        <a href={`?id=${id}`}>
          <figure className="image">
            <img src={poster} alt={title} />
          </figure>
          <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{year}</p>
          </div>
        </a>
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
