import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class AboutDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col sm={12} lg={12} md={12}>
              <h1 className="serviceName">Who I Am </h1>
              <hr />
              <p className="serviceDescription">
                Hi! I'm Name.
                
              </p>

              <br></br>
              <br></br>
              <h1 className="serviceName">Our Mission </h1>
              <hr />
              <p className="serviceDescription">Mission
              </p>

              <br></br>
              <br></br>
              <h1 className="serviceName">Our Vision </h1>
              <hr />
              <p className="serviceDescription">Vision
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutDescription;
