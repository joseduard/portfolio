import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  // Ici on utilise le hooks use ref
  const formRef = useRef()

  const [done, setDone] = useState(false);

  const handleSubmit = (e)=> {
    // Ici on va empecher que la page se recharge chaqu fois qu'on tape sur le botton submit avec la fucntion prevent Default
    e.preventDefault()
    // Pour envoyer donnes vers une adress mail on va utiliser EmailJS (email software provider) on recupere un id et un template qu'on est creé chez emailjs
    // ce morceau du cpde a etais pris du la documentation de emailjs pour react
    emailjs.sendForm('service_4zj9473', 'template_m15edyn', formRef.current, 'user_efhAYFNbLiLJsIoMKbvgm')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contactame papuchi</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="/assets/phone.png" alt="" className="c-icon" />
              +33 0787066429
            </div>
            <div className="c-info-item">
              <img src="/assets/email.png" alt="" className="c-icon" />
              joseduardo.jep@gmail.com
            </div>
            <div className="c-info-item">
              <img src="/assets/address.png" alt="" className="c-icon" />
              Auvergne-Rhône-Alpes
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Nom Prenom" name="user_name"></input>
              <input type="text" placeholder="Sujet" name="user_Subject"></input>
              <input type="text" placeholder="Email" name="user_email"></input>
              <textarea rows="5" type="text" placeholder="Message" name="message"/>
              <button>Submit</button>
              {done && "Merci pour votre message" }
          </form>
        </div>
      </div>
    </div>
  );
}
