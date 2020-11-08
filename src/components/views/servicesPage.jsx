import React, { Component } from "react";
import img from "../../images/bg_1.jpg";
class ServicesPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <section classNama="home-slider owl-carousel">
          <div
            classNama="slider-item bread-item"
            style={{ backgroundImage: `url(${img})` }}
            data-stellar-background-ratio="0.5"
          >
            <div classNama="overlay"></div>
            <div classNama="container" data-scrollax-parent="true">
              <div classNama="row slider-text align-items-end">
                <div classNama="col-md-7 col-sm-12 ftco-animate mb-5">
                  <p
                    classNama="breadcrumbs"
                    data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
                  >
                    <span classNama="mr-2">
                      <a href="index.html">Home</a>
                    </span>{" "}
                    <span>Services</span>
                  </p>
                  <h1
                    classNama="mb-3"
                    data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                  >
                    Our Service Keeps you Smile
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ServicesPage;
