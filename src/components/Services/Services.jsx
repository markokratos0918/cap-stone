import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';

class Services extends Component {
  render() {
    return (
        <Fragment>
            <Container className="text-center">
            <h1 className="serviceMainTitle">OUR SERVICES</h1>
               <div className="bottom"></div>

                   <Row>
                  <Col lg={4} md={6} sm={12}>
                  <div className="serviceCard text-center">
                    <img className="ecommerceIcon" src={ecommerceIcon} alt=""/>
                    <h2 className="serviceName">Ecommerce</h2>
                  <p className="serviceDescription">We will design and develop ecommerce online store website.</p>
                  </div>
                  </Col>

                  <Col lg={4} md={6} sm={12}>
                  <div className="serviceCard text-center">
                    <img className="designIcon" src={designIcon} alt=""/>
                    <h2 className="serviceName">Ecommerce</h2>
                    <p className="serviceDescription">We will design and develop ecommerce online store website.</p>
                    </div>
                  </Col>

                  <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                    <img className="webIcon" src={webIcon} alt=""/>
                    <h2 className="serviceName">Web Development</h2>
                    <p className="serviceDescription">Clean and fresh issue free code to make your website dynamic perfectly.</p>
                  </div>
                  </Col>
                  </Row>
            </Container>
        </Fragment>
      
    )
  }
}

export default Services;
