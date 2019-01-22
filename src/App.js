import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Home} from "./components/Home.jsx";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // component did mount, handle resize and all other functions see ChinookRemodel site

  }
  render() {
    return (
      <Router>
        <Fragment>
        <div>
          <Header />
          
            {/* home route */}
            <Route path="/" exact render={() => <Home {...this.state} />} />

         
          <Footer />
        </div>
        </Fragment>
      </Router>
    )
  }
}

export default App;