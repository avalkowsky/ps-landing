import React, { Component } from 'react';
import { name, landingLabel, portfolioLabel } from './header_content';

export default class LandingHeader extends Component {

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="black">
          <div className="nav-wrapper black-text">
            <a href="#!" className="brand-logo" style={{marginLeft: 20}}>{name}</a>
            <ul className="right hide-on-med-and-down">
              <li><a className="active" href="#">{landingLabel}</a></li>
              <li><a href="#">{portfolioLabel}</a></li>
              <li><a href="#"> <i className="material-icons right">mail_outline</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
