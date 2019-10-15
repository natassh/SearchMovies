import React from 'react';
import { Title } from './Components/Atoms/Title/Title';
import { SearchForm } from './Components/Molecules/SearchForm/SearchForm';
import { MoviesList } from './Components/Molecules/MoviesList/MoviesList';
import './App.css';

class App extends React.Component {
  state = { results: [] };

  _handleResults = results => {
    // Guardamos en el state 'results' el array con el resultado que nos llega de la api
    this.setState({ results });
  };

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0 ? (
          <p>Sin resultados</p>
        ) : (
          <MoviesList movies={this.state.results} />
        )}
      </div>
    );
  }
}

export default App;

// Tenemos todas las peliculas en el state porque teniamos el metodo _handleResults que se lo pasabamos al componente SEarchForm y que al recibir los resultados de la api se ejecutaba (este metodo _handleResults) actualizando el state de este componente (lo que tenemos en la linea 11)
