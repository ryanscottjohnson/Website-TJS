import React from 'react';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import './home.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <React.Fragment>

      <Header />

      <section id="hero-block">
        <div className="hero">
        <p>Hello World!</p>
        
        </div>
 
      </section>
      <section id="test">
      <p>AnyBody Home?</p>
      </section>

      <Footer />

    </React.Fragment>
  }
}

export default HomePage;