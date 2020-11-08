import React, { Component } from "react";

import img1 from "../photos/img5.png";
import img2 from "../photos/img10.jpeg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">DentaCare.</h2>
                <p>
                Loin loin, derrière le mot montagnes, loin des pays Vokalia et Consonantia, vivent les textes aveugles.
                </p>
              </div>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft ">
                <li className="">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="py-2 d-block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 pr-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  <a
                  href="#"
                    className="blog-img mr-4"
                    style={{ backgroundImage: `url(${img1})` }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                      Même le pointage tout-puissant n'a aucun contrôle sur
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> Sept 15, 2018
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: `url(${img2})` }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                      Même le pointage tout-puissant n'a aucun contrôle sur
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> Sept 15, 2018
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Office</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text"> +243(0) 853566856 <br/> 994247596 <br/> 853932086 </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text"> pcmkisangani1@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved |{" "}
              <a href="https://fidbagraphics.com" target="_blank">
                Fidba Graphics
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
