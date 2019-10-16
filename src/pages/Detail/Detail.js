import React from 'react';
import PropTypes from 'prop-types';

import './Detail.css';

const API_KEY = 'ba8563b';

export class Detail extends React.Component {
  state = {
    movie: {}
  };

  _fetchMovie({ id }) {
    const endpoint = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    fetch(endpoint)
      .then(res => res.json())
      .then(movie => {
        console.log({ movie });
        // GUardamos toda la info en el state movie del componente Detail
        this.setState({ movie });
      });
  }

  _goBack() {
    // Utilizaremos el objeto Back de metodo History del Window
    window.history.back();
  }

  // Cuando el componente se ha renderizado al menos una vez,
  // vamos a utilizar la id que recibimos por las props para llamar a un metodo _fetchMovie
  // (que es el metodo que recuperar toda la info de la pelicula):
  componentDidMount() {
    console.log(this.props);
    const { movieId } = this.props.match.params;
    this._fetchMovie({ id: movieId });
  }
  render() {
    // Destructuramos los datos que queremos coger de la api, los nombres son los que me muestra la api y aparecen en el console. Fijarse en las mayusculas xq salen cm la api los quiere poner
    const { Title, Actors, Poster, Metascore, Plot } = this.state.movie;
    return (
      <article className="card card--detail">
        <button className="button" onClick={this._goBack}>
          Volver
        </button>
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
