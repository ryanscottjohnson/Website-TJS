import React from 'react';
// import {connect} from 'react-redux';

import Header from '../header/header.jsx';

import './home.scss';
// var ml_account;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    // this.runMailPopup = this.runMailPopup.bind(this);
  }


  render() {
    return <React.Fragment>

        <section id="hero-block">
          <div className="cta-block">
            <h1>Greeting</h1>
            <p>Content</p>
          </div>
        </section>

        {/* <section id="home-how-it-works">
            <button onClick={this.runMailPopup} className="cta-btn">Connect</button>
          <h1>Title</h1>
          <ul>
            <li>Content</li>

          </ul>
        </section> */}

    </React.Fragment>
  }
}

export default HomePage;