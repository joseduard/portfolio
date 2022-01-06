import Profil from "./components/profil/Profil";
import Realisations from "./components/realisations/Realisations";
import Topbar from "./components/topbar/Topbar";
import Competences from "./components/competences/Competences";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Profil/>
        <Realisations/>
        <Competences/>
        <Contact/>
      </div>
    </div>

  );
}

export default App;
