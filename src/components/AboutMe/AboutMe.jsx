import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import jayson from "../../asset/image/jayson.png";
import mark from "../../asset/image/mark.png";
import farah from "../../asset/image/farah.png";
import gelo from "../../asset/image/gelo.png";
import { init } from "ityped";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import RubberBand from "react-reveal/RubberBand";

class AboutMe extends Component {
  componentDidMount() {
    //jason.set
    const myElement1 = document.querySelector("#myElementJason");
    init(myElement1, {
      showCursor: false,
      strings: ["Web Designer", "Full Stack Web Developer"],
    }); //

    const myElement2 = document.querySelector("#myElementMark");
    init(myElement2, {
      showCursor: false,
      strings: ["Web Designer", "Full Stack Web Developer"],
    }); //

    //farah.set
    const myElement3 = document.querySelector("#myElementFarah");
    init(myElement3, {
      showCursor: false,
      strings: ["Web Designer", "Full Stack Web Developer"],
    }); //

    //gelo.set
    const myElement4 = document.querySelector("#myElementGelo");
    init(myElement4, {
      showCursor: false,
      strings: ["Web Developer", "Full Stack Web Developer"],
    }); //
  }

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <RubberBand>
            <h1 className="serviceMainTitle">Meet our team</h1>
          </RubberBand>
          <div className="bottom"></div>

          <Row>
            <Col lg={6} md={6} sm={12}>
              <Flip top>
                <div className="aboutMeImage">
                  <Zoom top>
                    <img className="aboutImg" src={jayson} />
                  </Zoom>
                </div>
              </Flip>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails center">HI There, I`m</h2>
                <h2 className="aboutMeTitle center">Jayson</h2>
                <h3 className="aboutMeDetails center">
                  Work as <span id="myElementJason"> </span>{" "}
                </h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={6} sm={12}>
              <Flip top>
                <div className="aboutMeImage">
                  <Zoom top>
                    <img className="aboutImg" src={mark} />
                  </Zoom>
                </div>
              </Flip>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">HI There, I`m</h2>
                <h2 className="aboutMeTitle">Mark</h2>
                <h3 className="aboutMeDetails">
                  Work as <span id="myElementMark"> </span>{" "}
                </h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={6} sm={12}>
              <Flip top>
                <div className="aboutMeImage">
                  <Zoom top>
                    <img className="aboutImg" src={farah} />
                  </Zoom>
                </div>
              </Flip>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">HI There, I`m</h2>
                <h2 className="aboutMeTitle">Farah</h2>
                <h3 className="aboutMeDetails">
                  Work as <span id="myElementFarah"> </span>{" "}
                </h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={6} sm={12}>
              <Flip top>
                <div className="aboutMeImage">
                  <Zoom top>
                    <img className="aboutImg" src={gelo} />
                  </Zoom>
                </div>
              </Flip>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">HI There, I`m</h2>
                <h2 className="aboutMeTitle">Gelo</h2>
                <h3 className="aboutMeDetails">
                  Work as <span id="myElementGelo"> </span>{" "}
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
