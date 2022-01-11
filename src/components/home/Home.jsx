import React from "react";
import "./home.scss";



export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/photo.png" alt="photo eduardo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hola et bienvenu, Je suis </h2>
          <h1>Eduardo Perez </h1>
          <h3>
            Développeur web <span>JavaScript</span>
          </h3>
        </div>
        <a href="#realisations">
            <img src="/assets/down.png" alt="down icon"/>
      

        </a>
      </div>
    </div>
  );
}
