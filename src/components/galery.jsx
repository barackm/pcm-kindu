import React, { Component } from "react";
import img1 from "../photos/img2.jpg";
import img2 from "../photos/img3.jpg";
import img3 from "../photos/img4.jpg";
import img4 from "../photos/img6.jpeg";
import img5 from "../photos/img10.jpeg";
import img6 from "../photos/img11.png";
import img7 from "../photos/img12.jpeg";
import img8 from "../photos/img14.jpg";
import img9 from "../photos/img15.jpg";
import img10 from "../photos/img27.jpg";
import img11 from "../photos/img29.jpeg";
import img12 from "../photos/img30.jpg";
import img13 from "../photos/img23.jpeg";
import img14 from "../photos/img24.jpg";
import img15 from "../photos/img19.jpeg";

class Galery extends Component {
  state = {};
  render() {
    const photos = [
      {
        id: 1,
        img: img1,
      },
      {
        id: 2,
        img: img2,
      },
      {
        id: 3,
        img: img3,
      },
      {
        id: 4,
        img: img4,
      },
      {
        id: 5,
        img: img5,
      },
      {
        id: 6,
        img: img6,
      },
      {
        id: 7,
        img: img7,
      },
      {
        id: 8,
        img: img8,
      },
      {
        id: 9,
        img: img9,
      },
      {
        id: 10,
        img: img10,
      },
      {
        id: 11,
        img: img11,
      },
      {
        id: 12,
        img: img12,
      },
      {
        id: 13,
        img: img13,
      },
      {
        id: 14,
        img: img14,
      },
      {
        id: 15,
        img: img15,
      },
    ];
    return (
      <section class="ftco-gallery">
        <div class="container-wrap">
          <div class="row no-gutters">
            {photos.map((item) => (
              <div class="col-md-3 " key={item.id}>
                <a
                  // href={`${item.img}`}
                  class="gallery img d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div class="icon mb-4 d-flex align-items-center justify-content-center">
                    <span class="icon-search"></span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Galery;
