import React, { useState } from "react";
import {
  Link
} from "react-router-dom";
import SketchTorus from '../sketches/sketch-torus';
import '../App.css';
import torus from '../images/torus.png';
import torus1 from '../images/1.png';
import torus2 from '../images/2.png';
import torus3 from '../images/3.png';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'show' : 'hide';

  const SwiperHero = {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <>
      <main>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="about-img">
                <img src={torus} alt="" />
              </div>
              <div className="about-text">
                <h2>Torus</h2>
                <br/>
                <p>
                  In geometry, a torus (plural tori) is a surface of revolution 
                  generated by revolving a circle in three-dimensional space about 
                  an axis that is coplanar with the circle.
                  <br />
                  <br />
                  If the axis of revolution does not touch the circle, the surface 
                  has a ring shape and is called a torus of revolution. If the axis 
                  of revolution is tangent to the circle, the surface is a horn torus. 
                  If the axis of revolution passes twice through the circle, the surface 
                  is a spindle torus. If the axis of revolution passes through the 
                  center of the circle, the surface is a degenerate torus, a sphere. 
                  If the revolved curve is not a circle, the surface is a related shape, a toroid.
                  <br />
                  <br />
                  <a href="https://en.wikipedia.org/wiki/Torus">WikiPedia</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="canvas-sketch">
          <div className={menuClassNames}>
            <div className="input-btn-wrapper">
              <div id="inputsVariables" className="container"></div>
              <div id="btnSave" className="container"></div>
            </div>
          </div>
          <button className="btn-toggle" onClick={() => setIsOpen(!isOpen)}>custom</button>
          <SketchTorus />
        </section>
        {/* <h2 className="container examples">Examples</h2>
        <section className="carousel">
          <Swiper {...SwiperHero}>
            <div className="swiper-img">
              <img src={torus1} alt="" />
            </div>
            <div className="swiper-img">
              <img src={torus2} alt="" />
            </div>
            <div className="swiper-img">
              <img src={torus3} alt="" />
            </div>
          </Swiper>
        </section> */}
      </main>
      <Link to="/">
          <h1>⟵</h1>
      </Link>
      <footer>
        <p>satanic & satanist, inc</p>
      </footer>
    </>
  );
}

export default App;