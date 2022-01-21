import React from "react";
import "./profil.scss";

export default function Profil() {
  return (
    <div className="a" id="profil">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="/assets/photo.jpg"
            alt="Eduardo black and white"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Mon histoire</h1>

        <p className="a-desc">
          Après plus de 13 ans en gestion d'entreprise, je me suis enfin lancé
          dans la réalisation de mon rêve : entrer dans le monde du web. En
          2021, j'ai franchi le pas en changeant de voie et en me formant
          professionnellement en tant que développeur web full stack en
          javaScript, Node js et postgreSQL. Puis je me suis spécialisé en React
          et React Redux. <br /> Après avoir validé le titre professionnel de
          développeur web et web mobile équivalent bac+2 et avoir obtenu une
          certification Opquast en qualité de projet web, je souhaite continuer
          ma montée en compétences pour répondre à toutes les exigences des
          clients et à toutes leurs demandes.
        </p>
        <h4 className="a-motivation-title">Mon credo</h4>
        <p className="a-sub">
          Le numérique donne à chaque personne l'opportunité de réaliser ses
          rêves et d'atteindre ses objectifs pour avoir un impact positif sur le
          futur de tous. La seule limite est celle de notre imagination.
        </p>
      </div>
    </div>
  );
}
