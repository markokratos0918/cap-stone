import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import Zoom from "react-reveal/Zoom";
class ContactSec extends Component {
constructor() {
super();
this.state = {
     address: "...",
     email: "...",
     phone: "...",
     loading: true,
};
}

componentDidMount() {
RestClient.GetRequest(AppUrl.FooterData).then((result) => {
     this.setState({
     address: result[0]["address"],
     email: result[0]["email"],
     phone: result[0]["phone"],
     loading: false,
     });
});
}

sendContact() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
// alert(name+"/"+email+"/"+message);

let jsonObject = { name: name, email: email, message: message };
RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject))
     .then((result) => {
     alert(result);
     })
     .catch((error) => {
     alert("Error");
     });
}

render() {
if (this.state.loading === true) {
     return <Loading />;
} else {
     return (
     <Fragment>
          <Container className="mt-5">
          <Row>
          <Col lg={6} md={6} sm={12}>
               <Zoom left>
               <h1 className="serviceName">Quick Connect</h1>

               <Form>
                    <Form.Group>
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control
                    id="email"
                    type="email"
                    placeholder="Enter Your email"
                    />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Message </Form.Label>
                    <Form.Control id="message" as="textarea" rows={3} />
                    </Form.Group>

                    <Button onClick={this.sendContact} variant="primary">
                    Submit
                    </Button>
               </Form>
               </Zoom>
          </Col>

          <Col lg={6} md={6} sm={12}>
               <Zoom right>
               <h1 className="serviceName">Discuss Now</h1>

               <p className="serviceDescription">
                    {this.state.address}
                    <br></br>
                    <FontAwesomeIcon icon={faEnvelope} /> Email :{" "}
                    {this.state.email}
                    <br></br>
                    <FontAwesomeIcon icon={faPhone} /> Phone :{" "}
                    {this.state.phone}
                    <br></br>
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

export default ContactSec;
