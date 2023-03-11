import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

export class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

  render() {
    return (
      <Fragment>
        <Container className="text-center">
        <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12} className="videoText">
                <p className='serviceDescription text-justify'>JMFG Starlink is an Internet Solution Provider that offers high-speed internet plans for both home and business use. With our innovative technology and reliable network, you can stay connected with ease, no matter where you are located.<br /><br />

One of the primary benefits of using JMFG Starlink is the speed of our internet service. Our advanced satellite technology provides fast, reliable internet with low latency, which means you can stream videos, download files, and browse the web with ease. This is particularly useful for businesses that rely on a stable internet connection for video conferencing, cloud-based applications, and other critical operations.<br /><br />

To learn more about the benefits of using JMFG Starlink Internet Solution Provider for your home or business, watch this video. It provides an overview of our services and how we can help you stay connected.</p>
                </Col>

                <Col lg={6} md={6} sm={12} className="videoCard">
                <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
        
                </Col>
            </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
        
        <Modal.Body>

        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <BigPlayButton position="center" />
        </Player>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      </Fragment>
    )
  }
}

export default Video
