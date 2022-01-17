import React from "react";
import "./competences.scss";

export default function Competences() {
  return (
    <div className="competences" id="competences">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/lataupe.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque quaerat pariatur commodi magni ullam quo.
                </p>
                <span>no e que poner</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/lataupe.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt=""/>
      <img src="assets/arrow.png" className="arrow right" alt=""/>
    </div>
  );
}
