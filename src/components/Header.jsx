import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="content">
        <header className={`header ${this.props.device}`}>
          <div className="logo">
            <Link to="/">
              <div className="logo-container">
                <div className="image-container">
                  <img src="../public/logo/tjs-logo.png" alt="TJS LOGO"/>
                </div>
              </div>
            </Link>
            <h2>Header</h2>
          </div>
          <Nav device={this.props.device} handleNavClick={this.props.handleNavClick} {...this.props} />
        </header>
      </div>
    );
  }
}

export default Header;