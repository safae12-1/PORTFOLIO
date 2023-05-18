import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";



function About() {
  return (
    <div>
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

<Aboutcard />
</Col>

</Row>
<h1 >
  Ensemble des compétences professionnelles
</h1>

<Techstack />



      </Container>
    </Container>
          <br />
          <br />
          <br />
          <br />
     
          <br />
          <br />   <br />
          <br />
    
     
        </div>
  );
}

export default About;
