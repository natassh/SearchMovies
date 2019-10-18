import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBackToHome } from '../../Components/Atoms/ButtonBackToHome/ButtonBackToHome';
import { ButtonBack } from '../../Components/Atoms/ButtonBackToHome/ButtonBack';

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
      <article className="card card--detail">
        <ButtonBackToHome />
        <ButtonBack onClick={this._handleGoBack} />
        <h1 className="card__title">{Title}</h1>
        <figure className="image">
          <img src={Poster} alt={Title} />
        </figure>

        <h3 className="card__subtitle">{Actors}</h3>
        <p className="card__text">{Metascore}</p>
        <p className="card__text">{Plot}</p>
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
