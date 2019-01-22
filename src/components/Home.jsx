import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Nav from "./Nav";
// import Carousel from "nuka-carousel";
// import ProductTile from "./ProductTile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // carouselImages: [],
    };
  }
  // componentWillMount() {
  //   console.log("props from home:", this.props);
  //   this.setState({ carouselImages: this.renderGalleries(this.props) });
  // }
  // componentDidMount() {
  //   this.setState({ carouselImages: this.renderGalleries(this.props) });
  //   //fixes carousel resize bug
  //   setTimeout(() => {
  //     window.dispatchEvent(new Event("resize"));
  //   }, 50);
  // }
  // renderCarousel() {
  //   return (
  //     <Carousel wrapAround autoplay>
  //       {this.state.carouselImages}
  //     </Carousel>
  //   );
  // }
  // renderGalleries(props) {
  //   const residential = props.galleries.residential;
  //   const commercial = props.galleries.commercial;
  //   const childItems = residential.concat(commercial);
  //   return childItems
  //     .filter(function(x) {
  //       return x.hero === true;
  //     })
  //     .map(function(x, index) {
  //       return <img key={index} src={x.image} />;
  //     });
  // }

  render() {
    
    return (
      <div className="content">
        <header className={`home ${this.props.device}`}>
          <div className="image">
            {/* <Link to="/"> */}
              <div className="image-container">
                <img src="../public/images/main.jpg" alt="Home Image"/>
              </div>
            {/* </Link> */}
          </div>
          {/* <Nav device={this.props.device} handleNavClick={this.props.handleNavClick} {...this.props} /> */}
        </header>
      </div>
    );
  }



  // render() {
  //   return (
  //     <h2>from home</h2>
    //   <div className="home">
    //     {this.renderCarousel()}
    //     <div className="content">
    //       <section className="grid product-categories three-column">
    //         <ProductTile
    //           icon="home"
    //           title="Residential"
    //           text="Give your entire home a facelift or just get that kitchen you've always wanted.  Either way you will be the talk of the neighborhood."
    //         />
    //         <ProductTile
    //           icon="building"
    //           title="Commercial"
    //           text="A great investment for any business. Image is everything.  When you combine image with functionality and well designed spaces you get to efficiency and curb appeal."
    //         />
    //         <ProductTile
    //           icon="handshake"
    //           title="Mobile Homes"
    //           text="When northwest weather is at its worst, your roof is your first line of defense. Transform your curb-appeal and keep you and your loved ones safe. Insulated standing seam roof will keep your home warmer in the winter and cooler in the summer."
    //         />
    // //         <ProductTile
    //           icon="globe"
    //           title="Green"
    //           text="We work diligently to be good stewards of your pocket book as well as the environment.  Green is good for everybody."
    //         />
    //       </section>
    //     </div>
    //     <section className="marque">
    //       <div className="content">
    //         <h2>With more than 30 years experience, we&#39;ve been serving Western washington with beautiful, thoughtful construction since 2006</h2>
    //         <p>Innovative, beautiful, and timeless</p>
    //         <Link to="/bid-request">Request a free estimate!</Link>
    //       </div>
    //     </section>
    //     <section className="content two-col-content">
    //       <div className="grid two-column">
    //         <div>
    //           <img src="public/images/commercial/32.png" />
    //         </div>
    //         <div>
    //           <p>
    //             A trusted name in construction. Each employee is carefully screened and trained. We take pride on our
    //             craftsmanship. Our top priority is your satisfaction!
    //           </p>
    //           <ul>
    //             <li>We keep our promises. The estimate you receive at the beginning of the job does not change. There are no hidden fees. You know up front what the costs will be.</li>
    //             <li>The work site will be clean when we are completed with your project.</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
  //   );
  // }
}

export default Home;