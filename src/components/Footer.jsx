import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer id="colophon" className="site-footer">
      <h2>from footer</h2>
        {/* <div className="footer footer-text-color-white">
          <div className="footer-inner">
            <div className="content">
              <div className="grid four-column">
                <div className="widget-area">
                  <aside id="text-11" className="widget widget_text">
                    <h3 className="widget-title">Contact Info</h3>
                    <div className="textwidget">
                      <b>Teressa Johnson Studio</b> <br />
                      PO Box ######
                      Sumner Wa, 98030<br />
                      <b>Phone: 253-709-9509</b><br />
                      <a href="mailto:"></a>
                    </div>
                  </aside>
                </div>

                <div className="widget-area">
                  <aside className="widget widget_text">
                    <h3 className="widget-title"><Link to={'/product-detail'}></Link></h3>
                    <p>
                    </p>
                  </aside>
                </div>

                <div className="widget-area">
                  <aside id="text-12" className="widget widget_text">
                    <h3 className="widget-title">Hours &amp; Accepted Payment Methods</h3>
                    <div className="textwidget">
                      <b>Hours of Operation:</b> <br />
                      Monday thru Friday: 7am – 4pm
                      <br />
                      <br />
                      <p>Payment Types: Cash, Check or CC (Visa, MC, Discover &amp; AMEX). <br />
                        Financing available with approved credit for residential roofing projects.
                        </p>
                    </div>
                  </aside>
                </div>

                <div className="widget-area">
                  <aside id="text-13" className="widget widget_text">
                    <h3 className="widget-title">License Info</h3>{" "}
                    <div className="textwidget">
                      <p></p>
                      <a href="" target="_blank" rel="nofollow noopener noreferrer"><img src="https://seal-alaskaoregonwesternwashington.bbb.org/seals/blue-seal-200-42-whitetxt-bbb-1435.png"  alt="" /></a>
                    </div>
                  </aside>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="content">
              <div>
                Copyright © {new Date().getFullYear()} <a href="web address"> Teressa Johnson Studio </a> All rights reserved.
              </div>
          </div>
        </div> */}
      </footer>
    );
  }
}

export default Footer;