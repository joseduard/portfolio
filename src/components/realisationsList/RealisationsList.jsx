import React from "react";
import "./realisationsList.scss";

export default function RealisationsList({ id, title, active, setSelected }) {
  return (
    //utilisation du ternaire pour faire la condition
    <li
      className={active ? "realisationsList active" : "realisationsList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
