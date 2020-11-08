import React, { Component } from "react";
import image from "../images/bg_1.jpg";
class Achievement extends Component {
  state = {};
  render() {
    return (
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: `url(${image})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 aside-stretch py-5">
              <div className=" heading-section heading-section-white  pr-md-4">
                <h2 className="mb-3">Réalisations</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-md-9 py-5 pl-md-5">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="14">
                        25
                      </strong>
                      <span>Annees d'Experience</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="4500">
                        10
                      </strong>
                      <span>Docteurs qualifies</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="4200">
                        2000
                      </strong>
                      <span>Clients heureux</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="320">
                        900
                      </strong>
                      <span>Patients par an</span>
                    </div>
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

export default Achievement;
