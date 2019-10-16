import React from 'react';

import { Home } from './pages/Home/Home';
import { Detail } from './pages/Detail/Detail';

import './App.css';

class App extends React.Component {
  render() {
    // Controlamos si entramos en la pagina de DETALLE o en la HOME
    // Creamos una nueva ruta enrutador con la direccion actual de la pagina
    const url = new URL(document.location);
    const Page = url.searchParams.has('id') ? (
      <Detail id={url.searchParams.get('id')} />
    ) : (
      <Home />
    );

    return <div className="App">{Page}</div>;
  }
}

export default App;

// Tenemos todas las peliculas en el state porque teniamos el metodo _handleResults que se lo pasabamos al componente SEarchForm y que al recibir los resultados de la api se ejecutaba (este metodo _handleResults) actualizando el state de este componente (lo que tenemos en la linea 11)
