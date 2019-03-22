import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './home/home.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menuStatus = null;
    return (
      <Router>
        <div className={`tjs-wrapper ${menuStatus}`}>
          <Header />
          <Home />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;