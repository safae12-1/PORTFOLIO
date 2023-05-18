import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body class="container">
        <p   style={{ textAlign: "justify" }}>
         Je m'appelle Safae Hachem et je viens d'El Jadida, au Maroc.
         Actuellement, je suis étudiant en première année de génie informatique à l'ENSAJ.
          <br />
          <br />
          En dehors du monde de la programmation, j'ai d'autres passions et activités qui me tiennent à cœur :
        </p>
        <ul>
          <li className="about-activity">
            -J'aime la lecture, qui m'ouvre les portes de l'imagination et du savoir.
          </li>
          <li className="about-activity">
            -Je suis également passionné par le montage de photos et de vidéos, une manière artistique de capturer des moments spéciaux.
          </li>
          <li className="about-activity">
            -Voyager est une autre de mes grandes passions. Découvrir de nouveaux endroits, cultures et personnes est une source d'inspiration inépuisable.
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
