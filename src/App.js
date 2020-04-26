import React from "react";
import SketchTorusHero from './sketches/sketch'
import SketchTorus from './sketches/sketch-torus'
import './App.css';
import torus from './images/torus.png';
import torus1 from './images/1.png';
import torus2 from './images/2.png';
import torus3 from './images/3.png';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

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

function App() {
  return (
    <>
      {/* <header>
        <div className="container">
          <div className="logo">x</div>
          <div className="menu">burger</div>
        </div>
      </header> */}
      <main>
        <section className="canvas-sketch">
          <SketchTorusHero />
          <section className="hero-text">
            <h1><strong>TORUS </strong>EXPERIMENT</h1>
          </section>
        </section>
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
                  In geometry, a torus (plural tori) is a surface of revolution generated by revolving a circle in three-dimensional space about an axis that is coplanar with the circle.
                  <br />
                  <br />
                  If the axis of revolution does not touch the circle, the surface has a ring shape and is called a torus of revolution. If the axis of revolution is tangent to the circle, the surface is a horn torus. If the axis of revolution passes twice through the circle, the surface is a spindle torus. If the axis of revolution passes through the center of the circle, the surface is a degenerate torus, a sphere. If the revolved curve is not a circle, the surface is a related shape, a toroid.
                  <br />
                  <br />
                  <a href="https://en.wikipedia.org/wiki/Torus">WikiPedia</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="canvas-sketch">
          <span id="but">
            <div id="myInputs" className="container"></div>
          </span>
          <SketchTorus />
        </section>
        <h2 className="container examples">Examples</h2>
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
        </section>
      </main>
      <footer>
        <p>satanic & satanist, inc</p>
      </footer>
    </>
  );
}

export default App;