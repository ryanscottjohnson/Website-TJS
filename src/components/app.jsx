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
          <Switch>
            <Route path="/" exact render={() => <Home {...this.state} />} />
            <Route path="subscriptions" />
            <Route path="press" />
            <Route path="services" />
            <Route path="projects" />
            <Route path="about" />
            <Route path="contact" />

          </Switch>
          <Footer />
        </div>
      </Router>

      // <React.Fragment>
      // </React.Fragment>
    )
  }
}

export default App;