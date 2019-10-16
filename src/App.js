import React from 'react';
import { Title } from './Components/Atoms/Title/Title';
import { SearchForm } from './Components/Molecules/SearchForm/SearchForm';
import { MoviesList } from './Components/Molecules/MoviesList/MoviesList';

import { Detail } from './pages/Detail';

import './App.css';

class App extends React.Component {
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
    // Controlamos si entramos en la pagina de DETALLE o en la HOME
    // Creamos una nueva ruta enrutador con la direccion actual de la pagina
    const url = new URL(document.location);
    // CReamos una constante booleana para ver si la url tiene el query parameter id (que estamos pasando en el elemento a de cada article que es mi pelicula)
    const hasId = url.searchParams.has('id');
    // Controlamos Si este valor es true: mostraremos el nuevo componente Detail
    // Como hacemos un return dentro del if, si entra en esta condicion no sera evaluado el codigo que le sigue. Si no entra seguiremos mostrando la portada
    if (hasId) {
      return <Detail id={url.searchParams.get('id')} />;
    }

    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;

// Tenemos todas las peliculas en el state porque teniamos el metodo _handleResults que se lo pasabamos al componente SEarchForm y que al recibir los resultados de la api se ejecutaba (este metodo _handleResults) actualizando el state de este componente (lo que tenemos en la linea 11)
