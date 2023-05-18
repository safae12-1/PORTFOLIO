import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/safae2.jpeg";


import Type from "./Type";

function Home() {
  return (
    <div>
    <br />
    <br />
    <section>
      <Container fluid className="home-section" >
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                Je suis
              Safae Hachem
              </h1>

              <div style={{ padding: 10, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 10 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
    
          </Row>

        </Container>
      </Container>
      <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      
    </section>
   
    </div>
  );
}

export default Home;
