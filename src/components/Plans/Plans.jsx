     import React, { Component, Fragment } from "react";
     import { Container, Row, Col } from "react-bootstrap";
     import { Link } from "react-router-dom";
     import RestClient from "../../RestAPI/RestClient";
     import AppUrl from "../../RestAPI/AppUrl";
     import Loading from "../Loading/Loading";
     import Zoom from "react-reveal/Zoom";
     class Plans extends Component {
     constructor() {
     super();
     this.state = {
          myData: [],
          loading: true,
     };
     }

     componentDidMount() {
     RestClient.GetRequest(AppUrl.PlansHome).then((result) => {
          this.setState({ myData: result, loading: false });
     });
     }

     render() {
     if (this.state.loading === true) {
          return <Loading />;
     } else {
          const MyList = this.state.myData;
          const MyView = MyList.map((MyList) => {
          return (
               <Col lg={6} md={12} sm={12}>
               <Row>
               <Col lg={6} md={6} sm={12} className="p-2">
                    <Zoom top>
                    <img className="courseImg" alt="img" src={MyList.small_img} />
                    </Zoom>
               </Col>

               <Col lg={6} md={6} sm={12}>
                    <Zoom top>
                    <h5 className="text-justify serviceName">
                         {MyList.short_title}{" "}
                    </h5>
                    <p className="text-justify serviceDescription">
                         {MyList.short_description}
                    </p>{" "}
                    </Zoom>
                    <Link
                    className="courseViewMore float-left"
                    to={"/plansdetails/" + MyList.id + "/" + MyList.short_title}
                    >
                    View Details
                    </Link>
               </Col>
               </Row>
               </Col>
          );
          });

          return (
          <Fragment>
               <Container className="text-center">
               <h1 className="serviceMainTitle">PLANS</h1>
               <div className="bottom"></div>
               <Row>{MyView}</Row>
               </Container>
          </Fragment>
          );
     } // end Else
     }
     }

     export default Plans;
