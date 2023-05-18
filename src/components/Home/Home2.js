import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col  className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Permettez-moi de <span >me présenter</span>
            </h1>
            <p className="home-about-body">
              J'ai développé une véritable passion pour la programmation et j'ai acquis une solide expertise dans plusieurs langages, notamment le <i><b >Python et Java</b></i>, ainsi que le framework <i><b >Flask</b></i> pour Python. J'ai également une expérience significative dans le développement web, la conception de bases de données et la résolution de problèmes informatiques.
              <br />
              <br />
              Mon domaine d'expertise s'étend aux technologies modernes telles que le développement d'applications web . J'ai travaillé sur divers projets, allant de la création de sites web dynamiques.
              <br />
              <br />
              Je suis constamment à la recherche de nouvelles opportunités pour élargir mes connaissances et relever de nouveaux défis dans le domaine informatique. Mon objectif est de contribuer à des projets innovants et de mettre mes compétences au service de l'amélioration et de la résolution de problèmes concrets.
            </p>
          </Col>
  
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
