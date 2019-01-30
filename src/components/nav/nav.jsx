import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menuStatus = null;
    let menuText = null;
    // this.props.mobileNav === false ? (menuStatus = "hide", menuText = "menu") : (menuStatus = "show", menuText = "close");
    return (
      <div className="nav-container">
        <div className={`menu-link ${menuStatus}`} onClick={(e) => this.props.handleNavClick(e)}>
          {menuText}
        </div>
        <nav className={this.props.device}>
          <div className={`menu-container ${menuStatus}`}>
            <NavLink onClick={this.props.hideNav} to={{pathname : "/"}} activeClassName="active">Home</NavLink>
            <NavLink onClick={this.props.hideNav} to="/subscriptions" activeClassName="active">Subscriptions</NavLink>
            <NavLink onClick={this.props.hideNav} to="/press" activeClassName="active">Press</NavLink>
            <NavLink onClick={this.props.hideNav} to="/sercives" activeClassName="active">Services</NavLink>
            <NavLink onClick={this.props.hideNav} to="/about" activeClassName="active">About</NavLink>
            <NavLink onClick={this.props.hideNav} to="/projects" activeClassName="active">Projects</NavLink>
            <NavLink onClick={this.props.hideNav} to="/contact" activeClassName="active">Contact</NavLink>


          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;