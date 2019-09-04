import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Topbar from './components/layout/Topbar.js';
import Navbar from './components/layout/Navbar.js';
import TutorKikiLogo from './images/tutor-kiki-logo-3.jpg';

import Home from './components/route/Home';
import Register from './components/route/Register';
import Login from './components/route/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Topbar />
        <Navbar logo={TutorKikiLogo} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
