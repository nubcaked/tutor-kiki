import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.scss';

class Topbar extends Component {
  render() {
    return (
      <div className="tk-topbar">
        <nav>
          <div className="container">
            <ul id="nav-mobile" className="left">
              <li>
                <div>
                  <i class="small material-icons">phone</i>
                  <NavLink to="/">FAQ</NavLink>
                </div>
              </li>
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