import React from 'react';
import { Title } from '../../Components/Atoms/Title/Title';
import { SearchForm } from '../../Components/Molecules/SearchForm/SearchForm';
import { MoviesList } from '../../Components/Molecules/MoviesList/MoviesList';

export class Home extends React.Component {
  // Con el state usedSearch controlaremos cuando hemos usado la busqueda y como nada mas iniciar la web que todavia no hemos usado el search, tien sentido que sea el valor false
  state = { usedSearch: false, results: [] };

  // Guardamos en el state 'results' el array con el resultado que nos llega de la api
  _handleResults = results => {
    // Actualizamos tb aqui el state usedSearch para que muestre los resultados cuando hayamos buscado.
    this.setState({ results, usedSearch: true });
  };

  // Funcion que revisa lo longitud del array que tenemos en el state results y si es cero: muestra mensaje Sin resultados .
  // Y si su longitud es diferente a cero entonces renderiza el componente MoviesList y le pasa como prop todos los resultados que tenemos en el state
  _renderResults = () => {
    const { results } = this.state;
    return results.length === 0 ? (
      <p>Sorry 😉 Results not found!</p>
    ) : (
      <MoviesList movies={results} />
    );
  };

  render() {
    return (
      <>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {/* Evaluamos si el state usedSearch es cierto: ejecutaremos el metodo _renderResults() (Y ejecutamos la funcion en vez de solo lamarla). Y si el falso mostramos mensaje */}
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </>
    );
  }
}
