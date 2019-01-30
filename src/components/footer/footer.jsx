import React from 'react';

import './footer.scss';

import logo from '../../images/tjs-logo.png'

class Footer extends React.Component {

  render() {
    return <footer>
      <img className="footer-logo" src={logo} />
    </footer>
  }
}

export default Footer;