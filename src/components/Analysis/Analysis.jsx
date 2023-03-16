import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";

class Analysis extends Component {
constructor() {
super();
this.state = {
     data: [],
     techdesc: "...",
     loading: true,
};
}

componentDidMount() {
RestClient.GetRequest(AppUrl.ChartData).then((result) => {
     // console.log(result);
     this.setState({ data: result, loading: false });
});
// RestClient.GetRequest(AppUrl.HomeTechDesc).then((result) => {
//      console.log(result);
//      this.setState({ techdesc: result[0]['tech_description'] });
// });
RestClient.GetRequest(AppUrl.HomeTechDesc)
  .then((result) => {
    console.log(result);
    if (result && result.length > 0 && result[0]['tech_description']) {
      this.setState({ techdesc: result[0]['tech_description'] });
    } else {
      console.error("Error: Invalid data received from API.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

}

render() {
if (this.state.loading === true) {
     return <Loading />;
} else {
     var blue = "#051b35";
     return (
     <Fragment>
          <Container className="text-center">
          <LightSpeed top>
          <h1 className="serviceMainTitle">COVERED AREAS</h1>
          </LightSpeed>
          <div className="bottom"></div>
          <Row>
          <Col
               style={{ width: "100%", height: "300px" }}
               lg={6}
               md={12}
               sm={12}
          >
               <ResponsiveContainer>
               <BarChart width={730} height={300} data={this.state.data}>
               <XAxis dataKey="x_data" />
               <Tooltip />
               <Bar dataKey="y_data" fill={blue}></Bar>
               </BarChart>
               </ResponsiveContainer>
          </Col>

          <Col lg={6} md={12} sm={12}>
               <Zoom top>
               <p className="text-justify serviceDescription">
                    {ReactHtmlParser(this.state.techdesc)}
               </p>
               </Zoom>
          </Col>
          </Row>
          </Container>
     </Fragment>
     );
} // end Else
}
}

export default Analysis;
