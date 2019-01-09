import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Swithc } from "react-router-dom";


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
        <div>
          <Header />
          <Switch>
            {/* home route */}
            <Route path="/" exact render={() => <Home {...this.state} />} />

          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;