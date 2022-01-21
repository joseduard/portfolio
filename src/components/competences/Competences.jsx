import React, { useState } from "react";
import "./competences.scss";

export default function Competences() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/front.png",
      title: "Front",
      desc: "#HTML #CSS #javaScript #React #Redux #Sass #material-ui #bootstrap  ",
      img: "/assets/frontend.png",
    },
    {
      id: "2",
      icon: "./assets/back.png",
      title: "Back",
      desc: "#Node.JS #Express #SQL #postgreSQL #Strapi",
      img: "/assets/backend.png",
    },
    {
      id: "3",
      icon: "./assets/web.png",
      title: "Web design et Workflow",
      desc: "#Figma #Whimsical #Git #Agile #Notion",
      img: "/assets/workflow.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="competences" id="competences">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
