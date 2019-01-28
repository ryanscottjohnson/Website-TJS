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
        {/* <div className={`menu-link ${menuStatus}`} onClick={(e) => this.props.handleNavClick(e)}>
          {menuText}
        </div> */}
        <nav className={this.props.device}>
          <div className={`menu-container ${menuStatus}`}>
            {/* <NavLink onClick={this.props.hideNav} to={{pathname : "/residential"}} activeClassName="active">residential</NavLink> */}
            {/* <NavLink onClick={this.props.hideNav} to="/commercial" activeClassName="active">commercial</NavLink> */}
            {/* <NavLink onClick={this.props.hideNav} to="/mobile-homes" activeClassName="active">mobile homes</NavLink> */}
            {/* <NavLink onClick={this.props.hideNav} to="/bid-request" activeClassName="active">bid-request</NavLink> */}
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;