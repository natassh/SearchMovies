import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBackToHome } from '../../Components/Atoms/ButtonBackToHome/ButtonBackToHome';
import { ButtonBack } from '../../Components/Atoms/ButtonBackToHome/ButtonBack';
import Emoji from '../../Components/Atoms/Emoji/Emoji';

import './Detail.css';

const API_KEY = 'ba8563b';

export class Detail extends React.Component {
  state = {
    movie: {}
  };

  _fetchMovie({ id }) {
    const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    fetch(endpoint)
      .then(res => res.json())
      .then(movie => {
        //console.log({ movie });
        this.setState({ movie });
      });
  }

  _handleGoBack = e => {
    e.preventDefault();
    //console.log(this.props.history);
    const { goBack } = this.props.history;
    // window.history.back();
    goBack();
  };

  componentDidMount() {
    //console.log(this.props);
    const { movieId } = this.props.match.params;
    this._fetchMovie({ id: movieId });
  }
  render() {
    const { Title, Actors, Poster, Metascore, Plot } = this.state.movie;
    return (
      <article className="movie movie--detail">
        <h1 className="movie__title">{Title}</h1>
        <figure className="image">
          <img src={Poster} alt={Title} />
        </figure>

        <h3 className="movie__subtitle">{Actors}</h3>
        <p className="movie__text">
          <Emoji symbol="⭐️" label="star" /> {Metascore}
        </p>
        <p className="movie__text">{Plot}</p>
        <ButtonBackToHome />
        <ButtonBack onClick={this._handleGoBack} />
      </article>
    );
  }
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string
  })
};
