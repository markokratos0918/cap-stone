import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg="3" md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us </h2>

              <div className="social-container">
                <a href="#" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="#" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Address </h2>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Information </h2>
              <Link className="footerLink" to="/about">
                About Me{" "}
              </Link>{" "}
              <br></br>
              <Link className="footerLink" to="/about">
                Company Profile{" "}
              </Link>{" "}
              <br></br>
              <Link className="footerLink" to="/contact">
                Contact Us{" "}
              </Link>{" "}
              <br></br>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Policy </h2>
              <a className="footerLink" to="/refund">
                Fefund Policy{" "}
              </a>{" "}
              <br></br>
              <a className="footerLink" to="/terms">
                Terms And Condition{" "}
              </a>{" "}
              <br></br>
              <a className="footerLink" to="/privacy">
                Privacy Policy{" "}
              </a>{" "}
              <br></br>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center copyrightSection">
          <a className="copyrightlink" href="#">
            © Copyright 2023 by JMFG Starlink Internet Solution Provider, All
            Rights Reserved
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
