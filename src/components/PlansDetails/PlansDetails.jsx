import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faInfinity,
  faList,
  fagauge,
} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";

class PlansDetails extends Component {
  constructor(props) {
    super();
  }

  render() {
    let LongTitle = "";
    let LongDescription = "";
    let TotalMbps = "";
    let TotalCap = "";
    let TotalPrice = "";
    let SkillAll = "";
    let VideoUrl = "";
    let SmallImg = "";

    let PlanDetailsArray = this.props.plansallData;
    if (PlanDetailsArray.length === 1) {
      LongTitle = PlanDetailsArray[0]["long_title"];
      LongDescription = PlanDetailsArray[0]["long_description"];
      TotalMbps = PlanDetailsArray[0]["total_mbps"];
      TotalCap = PlanDetailsArray[0]["total_cap"];
      TotalPrice = PlanDetailsArray[0]["total_price"];
      SkillAll = PlanDetailsArray[0]["skill_all"];
      VideoUrl = PlanDetailsArray[0]["video_url"];
      SmallImg = PlanDetailsArray[0]["small_img"];
    }

    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={8} md={6} sm={12}>
              <h1 className="coruseDetailsText"> {LongTitle} </h1>
              <img className="courseDetaisImg" src={SmallImg} />
              <br></br> <br></br>
              <p className="CoruseallDescription">{LongDescription}</p>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="widget_feature">
                <h4 class="widget-title text-center">Plan Features</h4>
                <hr />
                <ul>
                  <li>
                    <span> Total Mbps :</span> {TotalMbps}Mbps
                  </li>

                  <li>
                    <span>Data Capping :</span> {TotalCap}
                  </li>

                  <li>
                    <span>Features:</span> {LongDescription}
                  </li>
                </ul>
                <div class="price-wrap text-center">
                  <h5>
                    Price:<span> ₱{TotalPrice}.00</span>
                  </h5>
                  <Button variant="warning">Apply Now!</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="widget_feature">
                <h1 className="coruseDetailsText"> All Features </h1>
                <hr />
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="iconBullent"
                      icon={faCheckSquare}
                    />{" "}
                    {SkillAll}
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <ReactPlayer
                url={VideoUrl}
                width="100%"
                height="100%"
                controls={false}
                playing={false}
              ></ReactPlayer>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default PlansDetails;
