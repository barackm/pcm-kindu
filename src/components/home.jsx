import React, { Component } from "react";
import img1 from "../images/bg_1.jpg";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="home-slider">
          <div
            className="slider-item home"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row slider-text align-items-center"
                dataScrollaxParent={true}
              >
                <div
                  className="col-md-6 col-sm-12 hiro-text"
                  //   dataScrollax=" properties: { translateY: '70%' }"
                  dataScrollax={{ properties: { translateY: "70%" } }}
                >
                  <h1
                    className="mb-4 main-text-hero"
                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                  >
                   Hôpital moderne dans un environnement calme et détendu
                  </h1>
                  <p
                    className="mb-4"
                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa odio aliquam incidunt natus nisi eius, dignissimos assumenda vitae similique facilis!
                  </p>
                  <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                    <a href="#" className="btn btn-primary px-4 py-3">
                      Faire une Suggestion
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </section>

        <section className="ftco-intro">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-3 color-1 p-4">
                <h3 className="mb-4">Cas d'urgence</h3>
                <p>Pour tous les cas d'urgence veuillez contacter ce numero</p>
                <span className="phone-number">+243(0) 853566856</span>
              </div>
              <div className="col-md-3 color-2 p-4">
                <h3 className="mb-4">Heures d'ouverture</h3>
                <p className="openinghours d-flex">
                  <span>Lundi - Dimanche</span>
                  <span>8:00 - 19:00</span>
                </p>
                <p className="openinghours d-flex">
                  <span>Samedi</span>
                  <span>10:00 - 17:00</span>
                </p>
                <p className="openinghours d-flex">
                  <span>Dimache</span>
                  <span>10:00 - 16:00</span>
                </p>
              </div>
              <div className="col-md-6 color-3 p-4">
                <h3 className="mb-2">Faire une suggestion</h3>
                <form action="#" className="appointment-form">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">Departement</option>
                            <option value="">Médecine Générale</option>
                            <option value="">Médecine Spécialisée</option>
                            <option value="">Laboratoire</option>
                            <option value="">Bloc opératoire</option>
                            <option value="">Pharmacie</option>{" "}
                            <option value="">Transport</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="icon">
                          <span className="icon-user"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="appointment_name"
                          placeholder="Nom"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="icon">
                          <span className="icon-paper-plane"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="appointment_email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="icon">
                          <span className="ion-ios-calendar"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_date"
                          placeholder="Date"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="icon">
                          <span className="ion-ios-clock"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_time"
                          placeholder="Heure"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="icon">
                          <span className="icon-phone2"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      value="Faire une Suggestions"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
