import React, { Component } from "react";

import img1 from "../photos/img10.jpeg";
import img2 from "../photos/img28.jpg";
import img3 from "../photos/img12.jpeg";

class LatestBlog extends Component {
  state = {};
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ">
              <h2 className="mb-2">Dernieres       actualites</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${img1})` }}
    >{}</a>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#1">Sep. 20, 2018</a>
                    </div>
                    <div>
                      <a href="#1">Admin</a>
                    </div>
                    <div>
                      <a href="#1" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading">
                      <a href="#1">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry" data-aos-delay="100">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${img2})` }}
    >{}</a>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#1">Sep. 20, 2018</a>
                    </div>
                    <div>
                      <a href="#1">Admin</a>
                    </div>
                    <div>
                      <a href="#1" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading">
                      <a href="#1">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-entry" data-aos-delay="200">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${img3})` }}
    >{}</a>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#1">Sep. 20, 2018</a>
                    </div>
                    <div>
                      <a href="#1">Admin</a>
                    </div>
                    <div>
                      <a href="#1" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading">
                      <a href="#1">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestBlog;
