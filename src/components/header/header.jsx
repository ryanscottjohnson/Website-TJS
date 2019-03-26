import React from 'react';
import { Link } from "react-router-dom";

import './header.scss';
import logo from '../../images/tjs-logo.png';

class Header extends React.Component {
  constructor() {
    super();

    }
    
    render() {
      
      return <header>
      <img src={logo} alt="TJS logo" id="logo" />
    </header>
  }
}


export default Header;


      // <div className="content">
      //   <header className={`header ${this.props.device}`}>
      //     <div className="logo">
      //       <Link to="/">
      //         <nav className="header-nav">
      //           <img src={logo} alt="TJS Logo" id="logo" />
      //         </nav>
      //       </Link>
      //     </div>
      //     {/* <Nav device={this.props.device} handleNavClick={this.props.handleNavClick} {...this.props} /> */}
      //   </header>
      // </div>