import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Zoom from "react-reveal/Zoom";
class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <Zoom top>
                        <FontAwesomeIcon
                          className="iconProject"
                          icon={faGlobe}
                        />
                        <h1 className="countNumber">
                          <CountUp start={0} end={1000}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h1>{" "}
                      </Zoom>
                      <h4 className="countTitle">Total Client</h4>
                      <hr className="bg-white w-25" />
                    </Col>

                    <Col>
                      <Zoom top>
                        <FontAwesomeIcon
                          className="iconProject"
                          icon={faChartArea}
                        />
                        <h1 className="countNumber">
                          <CountUp start={0} end={10}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h1>
                      </Zoom>
                      <h4 className="countTitle">Total Cites</h4>
                      <hr className="bg-white w-25" />
                    </Col>

                    <Col>
                      <Zoom top>
                        <FontAwesomeIcon
                          className="iconProject"
                          icon={faStar}
                        />
                        <h1 className="countNumber">
                          <CountUp start={0} end={4.5}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>{" "}
                        </h1>{" "}
                      </Zoom>
                      <h4 className="countTitle">Client Reviews</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        What we have Achieved
                      </Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />{" "}
                          Successfully deployed and maintained high-availability
                          Starlink internet service for over 10,000 subscribers.{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />{" "}
                          Implemented network monitoring and alerting system,
                          reducing network downtime by 30%.{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />{" "}
                          Improved customer satisfaction ratings by 20% through
                          proactive issue resolution and regular communication.{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />{" "}
                          Developed and launched online ordering and payment
                          system, increasing sales by 25%.{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />{" "}
                          Streamlined billing process and reduced billing errors
                          by 15% through automation and process improvements.{" "}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
