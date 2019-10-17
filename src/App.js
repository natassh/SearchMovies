import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Detail } from './pages/Detail/Detail';
import { PageError } from './pages/PageError/PageError';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:movieId" component={Detail} />
            <Route component={PageError} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// Tenemos todas las peliculas en el state porque teniamos el metodo _handleResults que se lo pasabamos al componente SEarchForm y que al recibir los resultados de la api se ejecutaba (este metodo _handleResults) actualizando el state de este componente (lo que tenemos en la linea 11)
