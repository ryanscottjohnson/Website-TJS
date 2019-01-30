import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nav from "../nav/nav.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './header.scss';
import logo from "../../images/tjs-logo.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="content">
        <header className={`header ${this.props.device}`}>
          <div className="logo">
            <Link to="/">
              <nav className="header-nav">
                <img src={logo} alt="TJS Logo" id="logo" />
              </nav>
            </Link>
          </div>
          <Nav device={this.props.device} handleNavClick={this.props.handleNavClick} {...this.props} />
        </header>
      </div>
    );
  }
}

export default Header;