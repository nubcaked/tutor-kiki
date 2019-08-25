import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Home from './components/route/Home';
import Register from './components/route/Register';
import Login from './components/route/Login';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='register' component={Register} />
          <Route path='login' component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
