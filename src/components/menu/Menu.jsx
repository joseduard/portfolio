import React from "react";
import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active") }> {/*Si menuOpen est vrai il aura une class active, avec la concatenation donne a className menu active*/}
      <ul>
        <li onClick={()=>setMenuOpen(false)}> {/*n'est pas la melhieur solution repeter la meme fucntion plusieurs fois*/}
          <a href="#home">Home</a>
        </li>
        <li  onClick={()=>setMenuOpen(false)}>
          <a href="#profil">Profil</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#competences">Competences</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#realisations">Réalisations</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
