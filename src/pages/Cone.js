import React from "react";
import {
  Link
} from "react-router-dom";
import SketchCone from '../sketches/sketch-cone';
import '../App.css';
import cone from '../images/cone.jpg';

function App() {
  return (
    <>
      <main>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="about-img">
                <img src={cone} alt="" />
              </div>
              <div className="about-text">
                <h2>Cone</h2>
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
          <div id="inputsVariables" className="container"></div>
          <div id="btnSave" className="container"></div>
          <SketchCone />
        </section>
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