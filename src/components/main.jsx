import React, { Component } from "react";
import Home from "./home";
import Services from "./services";
import Team from "./team";
import Achievement from "./achievement";
import Newspaper from "./newspaper";
import Galery from "./galery";
import LatestBlog from "./latestBlog";
import Contact from "./contact";
import About from "./about";
class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <Home />
        <About />
        <Services />
        <Team />
        <Galery />
        <div style={{marginTop: 70}}></div>
        <Achievement />
        <LatestBlog />
        <Contact />
        <Newspaper />
      </>
    );
  }
}

export default Main;
