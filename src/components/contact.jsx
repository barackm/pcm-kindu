import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="ftco-quote">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-md-5 aside-stretch py-5 choose">
              <div className="heading-section heading-section-white mb-5 ">
                <h2 className="mb-2">
                  DentaCare Procedure &amp; High Quality Services
                </h2>
              </div>
              <div className="">
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar. Because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli
                </p>
                <ul className="un-styled my-5">
                  <li>
                    <span className="icon-check"></span>Consectetur adipisicing
                    elit
                  </li>
                  <li>
                    <span className="icon-check"></span>Adipisci repellat
                    accusamus
                  </li>
                  <li>
                    <span className="icon-check"></span>Tempore reprehenderit
                    vitae
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 py-5 pl-md-5">
              <div className="heading-section mb-5 ">
                <h2 className="mb-2">Contatez nous</h2>
              </div>
              <form action="#" className="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom complet"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telephone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Envoyer"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
