import React, { useEffect, useRef } from "react";
import "./home.scss";
import { init } from "ityped";

export default function Home() {
  // Hook useRef fonction ou faite la fonction de un querySelecteur pour choisir un element
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      //{/*ici on utilise ityped grace au useEffect et useRef, dan ce partie on customise ityped"*/}
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["JavaScript", "React.js", "Redux", "Node.js", "Sass", "SQL"],
    });

    /*morceau du code pour utiliser ityped - npm */
  }, []);
  return (
    <div className="home" id="home">
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>
      <span className="animation"></span>

      {/* <div className="left">
        <div className="imgContainer">
          <img src="/assets/Image2.png" alt="Eduardo Perez" />
        </div>
      </div> */}
      <div className="right">
        <div className="wrapper">
          <h2>Hola et bienvenue, je suis </h2>
          <h1>Eduardo Perez </h1>
          <h3>
            Développeur web <span ref={textRef}></span>{" "}
            {/* ici on utilise  le hook useRef pour faire reference au elenet span*/}
          </h3>
        </div>
        <a href="#realisations">
          <img src="/assets/down.png" alt="down icon" />
        </a>
      </div>
    </div>
  );
}
