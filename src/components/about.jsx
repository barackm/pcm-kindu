import React, { Component } from "react";

import img2 from "../photos/img23.jpeg";
import img3 from "../photos/img12.jpeg"
class About extends Component {
  render() {
    return (
      <div>
        <section className="ftco-section">
          <div className="container">
            <div className="row d-md-flex">
              <div
                className="col-md-6  img about-image order-md-last"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
              <div className="col-md-6  pr-md-5 order-md-first">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap mb-5">
                    <div
                      className="nav  nav-pills"
                      id="v-pills-tab"
                    >
                      <a
                        className="nav-link active"
                        id="v-pills-whatwedo-tab"
                        href="#v-pills-whatwedo"
                        
                      >
                        Localisation
                      </a>

                      <a
                        className="nav-link"
                        id="v-pills-mission-tab"
                       
                        href="#v-pills-mission"
                     
                      >
                        Developpement et croissance
                      </a>

                      <a
                        className="nav-link"
                        id="v-pills-goal-tab"
                        href="#v-pills-goal"
                      >
                        Partenariats
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center about-text">
                    <div className="tab-content " id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-whatwedo"
                      >
                        <div>
                          <h2 className="mb-4">Nous sommes localises</h2>
                          <p>
                            Kisangani est le chef-lieu de la province de la
                            Tshopo, à l’EST de la République Démocratique du
                            Congo. <br /> Cette ville touristique de 1,6 million
                            d’habitants avec son histoire de ville martyre, a
                            besoin d’une institution sanitaire qui fournit à la
                            population locale des soins de qualité. <br />{" "}
                            Adresse de l’hôpital : 4ème avenue N°6, quartier
                            Plateau Boyoma, Commune Makiso, ville de Kisangani,
                            Province de la Tshopo, République Démocratique du
                            Congo (Coordonnées GPS).
                          </p>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-mission"
                      >
                        <div>
                          <h2 className="mb-4">To Accomodate All Patients</h2>
                          <p>
                            La PCM privilégie une stratégie de croissance
                            constante et d’amélioration quotidienne des services
                            compte tenu de l’exigence de plus en plus grande de
                            la population locale. La première étape est
                            l’expansion du complexe hospitalier avec la
                            construction d’un nouveau bâtiment pour accroitre sa
                            capacité. <br /> Ayant débuté dans les soins
                            généraux, sa réputation s’est surtout bâtie sur le
                            domaine de la chirurgie. Cependant, certains
                            domaines plus pointus sont en constante progression
                            avec des programmes de formation à l’étranger.{" "}
                            <br /> La cancérologie, l’anatomie pathologie,
                            l’imagerie médicale et les urgences sont parmi les
                            domaines de prédilection de l’hôpital d’ici
                            l’échéance 2025.
                          </p>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-goal"
                        role="tabpanel"
                        aria-labelledby="v-pills-goal-tab"
                      >
                        <div>
                          <h2 className="mb-4">Partenariats</h2>
                          <p>
                            La PCM a la confiance de plusieurs partenaires tant
                            nationaux qu’internationaux tel qu’Enabel, MSf,
                            Congo Airways, etc. Avec un climat de franche
                            collaboration, le comité de gestion de la PCM est à
                            l’écoute des partenaires afin de répondre de manière
                            plus précise aux exigences de chacun.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section-2">
          <div className="container-wrap">
            <div className="row d-flex no-gutters">
              <div
                className="col-md-6 img"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div className="col-md-6 d-flex">
                <div className="about-wrap">
                  <div className="heading-section heading-section-white mb-5 ">
                    <h2 className="mb-2">Actions Humanitaires</h2>
                    <p>
                      Avec le concours de partenaires de renommée
                      internationale, la PCM a coordonné des projets d’envergure
                      dans la province de la Tshopo concernant des réparations
                      de fentes labio-palatines et des opérations de goitre
                      entre autres.
                    </p>
                  </div>
                  <div className="heading-section heading-section-white mb-5 ">
                    <h2 className="mb-2">Histotique</h2>
                    <p>
                      Créé en 2015 par l’initiative du Professeur Albert Ahuka
                      Ona Longombe et de son épouse Hélène Wembi Koho, la
                      Polyclinique du Millénaire s’est installée dans le
                      quartier résidentiel du plateau Boyoma à Kisangani (RDC).
                      <br/> Après plusieurs mois de la mise en
                      place des différents départements, l’institution est
                      finalement reconnue comme ASBL en 2017 pour commencer ses
                      différentes actions humanitaires notamment les opérations
                      gratuites de goitre et les réparations de fentes
                      labio-palatines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      
      </div>
    );
  }
}

export default About;
