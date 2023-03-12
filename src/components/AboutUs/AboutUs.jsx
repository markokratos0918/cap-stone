import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import people from '../../asset/image/people.png';

export class AboutUs extends Component {
  render() {
    return (
     <Fragment>
        <Container className='text-center'>
        <h1 className="serviceMainTitle">ABOUT US</h1>
               <div className="bottom"></div>
            <Row>
                <Col lg={6} md={6} sm={12}>
                <div className='aboutUsImage'>
                <img className='aboutImg' src={people} />
                </div>
                </Col>

                <Col lg={6} md={12} sm={12}>
                <p className="text-justify serviceDescription">
                JMFG Starlink is an innovative Internet Solution Provider that is dedicated to bringing high-speed internet to homes and businesses around the world. We utilize cutting-edge satellite technology to provide fast, reliable, and affordable internet access, even in remote or hard-to-reach areas.<br /><br />
                Our mission is to bridge the digital divide and provide equal access to high-quality internet for all. We believe that reliable internet access is essential for economic growth, education, and social connectivity. JMFG Starlink is committed to making a positive impact on the world by providing an essential service that helps connect people and communities.<br /><br />
                Our team consists of experts in the fields of engineering, technology, and customer service. We are passionate about what we do and are constantly working to improve our network, services, and customer experience. We understand that the internet is critical to daily life and are committed to providing fast, reliable, and affordable internet solutions to our customers.
			    </p>
                </Col>
            </Row>
        </Container>
     </Fragment>
    )
  }
}

export default AboutUs
