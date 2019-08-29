import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="tk-navbar">
        <nav className="nav-wrapper">
          <div className="container">
            <a href="#" className="brand-logo">Tutor.Kiki</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/">Class Schedule</NavLink></li>
              <li><NavLink to="/">Fees & Promotions</NavLink></li>
              <li><NavLink to="/">Parent Portal</NavLink></li>
              <li><NavLink to="/">Tutor Portal</NavLink></li>
              <li><NavLink to="/">Contact Us</NavLink></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><NavLink to="/">Class Schedule</NavLink></li>
          <li><NavLink to="/">Fees & Promotions</NavLink></li>
          <li><NavLink to="/">Parent Portal</NavLink></li>
          <li><NavLink to="/">Tutor Portal</NavLink></li>
          <li><NavLink to="/">Contact Us</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;