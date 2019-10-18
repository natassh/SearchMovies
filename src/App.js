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
