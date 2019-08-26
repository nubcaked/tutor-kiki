import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.scss';

//TODO: CREATE SCOPED STYLING OR USE STYLED-COMPONENTS
class Topbar extends Component {
  render() {
    return (
      <div>
        <nav className="top-bar">
          <div className="container">
            <ul id="nav-mobile" className="left">
              <li><NavLink to="/">FAQ</NavLink></li>
            </ul>
            <ul id="nav-mobile" className="right">
              <li><NavLink to="/">FAQ</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Topbar;