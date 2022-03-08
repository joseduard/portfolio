import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  // props du composant
  return (
    <div className={"topbar " + (menuOpen && " active")}>
      {" "}
      {/*concatenation pour dire que la className sera topBar active quand les props soit menuOpen*/}
      <div className="wrapper">
        <div className="left">
          <a href="#profil" className="logo">
            Eduardo-web
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+33 787066429</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>joseduardo.jep@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
