import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
          
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
           <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
  Découvrez qui <strong className="purple">je suis</strong>
</h1>
<Aboutcard />
</Col>

</Row>
<h1 className="project-heading">
  Ensemble des compétences <strong className="purple">professionnelles</strong>
</h1>

<Techstack />

<h1 className="project-heading">
  Outils <strong className="purple">que j'utilise</strong>
</h1>
<Toolstack />

      </Container>
    </Container>
  );
}

export default About;
