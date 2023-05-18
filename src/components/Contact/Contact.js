import React from "react";
import { Row, Col } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <br />
      <br />

      <br />
      <br />
   
      <br />

      <Row>
        <Col md={12} className="home-about-social">
        <br />
      <br />
        <h1>Contact</h1>
        <br />
      <br />
      <br />


          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/safae12-1"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/safae-hachem-a866aa264/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/safae__sh1/?next=%2F"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
  <a
    href="mailto:safaehachem12@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <AiFillMail />
  </a>
</li>
<li className="social-icons">
  <a
    href="tel:+212621809312"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <AiFillPhone />
  </a>
</li>
          </ul>
      
   
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

 
    </div>
  );
}

export default Contact;
