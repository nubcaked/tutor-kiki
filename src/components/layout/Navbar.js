import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

class Navbar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      const sidenav = M.Sidenav.init(document.querySelectorAll('.sidenav'));
      const collapsible = M.Collapsible.init(document.querySelectorAll('.collapsible'));
    });
    
  }

  render() {
    return (
      <div>
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