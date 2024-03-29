import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
import Zoom from "react-reveal/Zoom";

class AllProjects extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectAll)
      .then((result) => {
        if (result == null) {
          this.setState({ error: true, loading: false });
        } else {
          this.setState({ myData: result, loading: false });
        }
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else if (this.state.loading === false) {
      const MyList = this.state.myData;
      const MyView = MyList.map((MyList) => {
        return (
          <Col lg={4} md={6} sm={12}>
            <Zoom top>
              <Card className="projectCard">
                <Card.Img variant="top" src={MyList.img_one} />
                <Card.Body>
                  <Card.Title className="serviceName">
                    {MyList.project_name}
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    {MyList.project_description.substring(0, 200)}
                  </Card.Text>
                  <Button variant="primary">
                    <Link
                      className="link-style"
                      to={
                        "/projectdetails/" +
                        MyList.id +
                        "/" +
                        MyList.project_name
                      }
                    >
                      {" "}
                      View More{" "}
                    </Link>{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Zoom>
          </Col>
        );
      });

      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
            <div className="bottom"></div>

            <Row>{MyView}</Row>
          </Container>
        </Fragment>
      );
    } // end Else
    else if (this.state.error === true) {
      return <WentWrong />;
    } // end if for error
  }
}

export default AllProjects;
