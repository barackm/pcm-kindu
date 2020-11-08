import React, { Component } from "react";
import image from "../photos/img10.jpeg";
class Services extends Component {
  state = {};
  render() {
    return (
      <section className="ftco-section ftco-services">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ">
              <h2 className="mb-2">Differents Services</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-tooth-1"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Médecine Générale</h3>
                  <p>
                    • Consultation générale et spécialisée (chirurgie,
                    Pédiatrie, Gynécologie, Médecine Interne)
                  </p>
                  <p>• Hospitalisation en chambres privées et Publique</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-dental-care"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Médecine Spécialisée</h3>
                  <p>
                    Gynécologie – Obstétrique (Consultation Prénatale,
                    Accouchement eutocique, Césarienne, Consultation postnatal).{" "}
                    <br /> ORL <br /> Pédiatrie <br /> Chimiothérapie <br />{" "}
                    Médecine Interne
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-tooth-with-braces"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Laboratoire </h3>
                  <p>
                    Examen de laboratoire tel que : Hémoglobine, Hématocrite,
                    Globules rouges, Globules blancs, Formules leucocytaire,
                    vitesse de sédimentation, Goutte épaisse, Groupe sanguin AB
                    O + Rhésus, selles directes et sédiments urinaires. <br />{" "}
                    Examen de laboratoire complémentaires tel que : Epreuves
                    biologiques, LCR, sang, urines, Glycémie et Widal. <br />
                    Examen de laboratoire spéciaux de type I tel que : HIV,
                    Frottis vaginal, Ziehl sur crachat, aptitude physique, test
                    anémie SS, Glycémie, HBS, PSA, Cholestérol.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-anesthesia"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Imagerie médicale </h3>
                  <p>
                    Radiographie osseuse (crane, colonne vertébrale, thorax,
                    ceinture, membres, etc…) <br /> Echographie gynécologique
                    (normale et Doppler) : Gynéco, obstétrique et pelvienne,
                    cardiaque. <br /> Ecographie abdominale et pelvienne. <br />{" "}
                    Echographie cardiaque. <br /> Electro cardiogramme
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-tooth-1"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Bloc opératoire </h3>
                  <p>
                    •Petit chirurgie : Suture simple de plaie linéaire, Abcès,
                    furoncle,… ;
                  </p>
                  <p>
                    • Techniques professionnelles : infiltration et autres ;
                  </p>
                  <p>• Transfusions sanguines : complète</p>
                  <p>
                    • Chirurgie Mineure et Majeure : appendicectomie, cure
                    herniaire, myomectomie, etc… ;
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-dental-care"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Pharmacie </h3>
                  <p>
                    Produits pharmaceutiques : ordonnance et livraison des
                    médicaments génériques et spécialisés Incluant les
                    antidiabétiques oraux et à injection (Glucophage à domicile
                    et insuline en hospitalisation) et antihypertenseurs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-dental-care"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Transport</h3>
                  <p>
                    Produits pharmaceutiques : ordonnance et livraison des
                    médicaments génériques et spécialisés Incluant les
                    antidiabétiques oraux et à injection (Glucophage à domicile
                    et insuline en hospitalisation) et antihypertenseurs.
                  </p>
                </div>
              </div>
            </div>
          
          
          </div>
        </div>
        <div className="container-wrap mt-5">
          <div className="row d-flex no-gutters">
            <div
              className="col-md-6 img"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="col-md-6 d-flex">
              <div className="about-wrap">
                <div className="heading-section heading-section-white mb-5 ">
                  <h2 className="mb-2">Dentacare with a personal touch</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
                <div className="list-services d-flex ">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-check2"></span>
                  </div>
                  <div className="text">
                    <h3>Well Experience Dentist</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="list-services d-flex ">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-check2"></span>
                  </div>
                  <div className="text">
                    <h3>High Technology Facilities</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="list-services d-flex ">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-check2"></span>
                  </div>
                  <div className="text">
                    <h3>Comfortable Clinics</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
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

export default Services;
