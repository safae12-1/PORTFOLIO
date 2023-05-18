import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import python from "../../Assets/Projects/python.jfif";
import blockchaine from "../../Assets/Projects/blockchaine.jfif";

import WordPress from "../../Assets/Projects/WordPress.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          Mes <strong >Travaux</strong> Récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai récemment travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchaine}
              isBlog={false}
              title="Projet de PFA"
              description="Mise en place d’un système basé sur la Blockchain permettant la digitalisation et la vérification de l’authenticité des relevés de notes"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WordPress}
              isBlog={false}
              title="Projet de WordPress"
              description="site web pour la Faculté Polydisciplinaire de sidi Bennour
              en utilisant Wordpress."
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Projet Python"
              description="application desktop qui permet d'afficher sur une carte
              le trajet le plus court entre toutes les stations-service
              d'une marque donnée"
                
            />
          </Col>


      

   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
