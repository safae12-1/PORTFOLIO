import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiJava,
  DiPython,
  
} from "react-icons/di";

import {
  
  SiFlask
} from "react-icons/si";

import { FaPhp } from 'react-icons/fa';
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
  <DiJava />
</Col>
   

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

    
    
     
      <Col xs={4} md={2} className="tech-icons">
  <SiFlask />
</Col>
      <Col xs={4} md={2} className="tech-icons">
  <FaPhp />
</Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

    </Row>
  );
}

export default Techstack;
