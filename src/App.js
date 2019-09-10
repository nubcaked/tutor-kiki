import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Topbar from './components/layout/Topbar.js';
import Navbar from './components/layout/Navbar.js';
import TutorKikiLogo from './images/tutor-kiki-logo-3.jpg';

import Home from './components/route/Home';
import SignUp from './components/route/SignUp';
import SignIn from './components/route/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Topbar />
        <Navbar logo={TutorKikiLogo} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
