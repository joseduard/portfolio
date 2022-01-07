import Profil from "./components/profil/Profil";
import Realisations from "./components/realisations/Realisations";
import Topbar from "./components/topbar/Topbar";
import Competences from "./components/competences/Competences";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  // ici on va developper une variable de etat (state) avec les hooks useState
  // useState permet d'ajouter l'etat local React à des fonctions composants
  // la variable s'appelle menuOpen et va initialisar en false, pour modifier la valeur de nemuOpen on va appeler setCount
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/*Voici les props du composant */}
      <div className="sections">
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <Profil />
        <Realisations />
        <Competences />
        <Contact />
      </div>
    </div>
  );
}

export default App;
