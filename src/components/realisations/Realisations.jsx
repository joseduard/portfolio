// import { List } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import RealisationsList from "../realisationsList/RealisationsList";
import "./realisations.scss";
import {
  jsRealisations,
  reactRealisations,
  htmlRealisations,
} from "../../data";

export default function Realisations() {
  const [selected, setSelected] = useState("javaScript");
  // une autre useState pour la date
  const [data, setData] = useState([]);

  const list = [
    {
      id: "Html",
      title: "Html Css",
    },
    {
      id: "javaScript",
      title: "javaScript",
    },
    {
      id: "React",
      title: "React.JS",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "javaScript":
        setData(jsRealisations);
        break;
      case "React":
        setData(reactRealisations);
        break;
      case "Html":
        setData(htmlRealisations);
        break;
      default:
        setData(jsRealisations);
    }
  }, [selected]);
  return (
    <div className="realisations" id="realisations">
      <h1>Réalisations</h1>
      <ul>
        {list.map((item) => (
          <RealisationsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
           <img src={d.img} alt="" />
           <a href={d.url} target="_blanc"><h3>{d.title}</h3></a>
            <p>{d.info}</p>
            <span>{d.techno}</span>
          
          </div>
          
        ))}
        
      </div>
      
    </div>
  );
}
