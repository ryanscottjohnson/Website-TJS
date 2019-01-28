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

  componentDidMount() {
    // Code for running Mailerlite
    // (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
    //   var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
    //   f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
    //   var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
    //   _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
      
    //   ml_account = ml('accounts', '1308892', 't0g9u5n8v8', 'load');
  }

  // runMailPopup() {
  //   ml_account('webforms', '1094822', 'b7x6u1', 'show');
  // }

  render() {
    return <React.Fragment>

        <section id="hero-block">
          <div className="cta-block">
            <h1>Greeting</h1>
            <p>Content</p>
            {/* <button onClick={this.runMailPopup} className="cta-btn">Connect</button> */}
          </div>
        </section>

        <section id="home-quotes">
          <div className="white-overlay quote-content">

          </div>
        </section>

        <section id="home-come-in">
          <p>Content</p>
        </section>
        <section id="home-learn-more">
          <h1>Learn more...</h1>
          <button onClick={this.runMailPopup} className="cta-btn">Connect</button>
        </section>

        <section id="home-how-it-works">
          <h1>Title</h1>
          <ul>
            <li>Content</li>

          </ul>
        </section>

      </React.Fragment>
  }
}

export default HomePage;