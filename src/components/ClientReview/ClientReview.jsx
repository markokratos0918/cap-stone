import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

export class ClientReview extends Component {
  render() {

    var settings = {
        autoPlaySpeed:3000,
        autoPlay: true,
        dots: true,
        infinite: true,
        speed: 3000,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
      <Fragment>
        <Container fluid={true} className="sliderBack text-center">
        <h1 className='reviewMainTitle p-3'>TESTIMONIAL</h1>
            <div className='reviewBottom'></div>
            
            <Slider {...settings}>
            <div>
            <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                    <img className="circleImg" src="https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?w=740&t=st=1678472196~exp=1678472796~hmac=b84bd1f7459af6fe12cb0e3665ad89cdd8836c702e9f664b472662042c768e39" />
                    <h2 className='reviewName'>Charlyn Mae Castillo</h2>
                    <p className='reviewDescription'> I am extremely pleased with my choice to switch to JMFG Starlink. The staff is very responsive, the installation tech was prompt and very professional, explaining all as he set up my service.</p>
                </Col>
            </Row>
            </div>

            <div>
            <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                    <img className="circleImg" src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-dark-hair-smiles-happily-expresses-positive-emotions-dressed-casual-turtleneck-hears-good-nes-isolated-brown-background-glad-meet-old-best-friend_273609-61400.jpg?w=740&t=st=1678476124~exp=1678476724~hmac=b57d162f6a2d3dfa408aa8534eae5fc8cd33fcd8ee6f1a7c1ee9dc95dcd5c182" />
                    <h2 className='reviewName'>Rod Conrad Sanchez</h2>
                    <p className='reviewDescription'> JMFG Starlink, in my opinion has been great. I haven't had any service issues, payment options are great and if I had any customer service issues, the lady on the other end was always courteous and very helpful.</p>
                </Col>
            </Row>
            </div>

            <div>
            <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                    <img className="circleImg" src="https://img.freepik.com/free-photo/smiling-natural-redhead-girl-cross-arms-chest-looks-confident-determined-camera-professional-woman-t-shirt-standing-against-white-background_176420-46504.jpg?w=740&t=st=1678476406~exp=1678477006~hmac=bae49de2dffed65f4fae9434162c401649012e5045ec8b38187e54edbd86e14e" />
                    <h2 className='reviewName'>Antonette Grace Mariano</h2>
                    <p className='reviewDescription'> I am very happy with my JMFG Starlink. It is really fast and I have told my friends how I love it. So many people complain about their internet being slow. I refer them to JMFG Starlink because I do not have any issues and service men are great too!</p>
                </Col>
            </Row>
            </div>
            </Slider>
        </Container>
      </Fragment>
    )
  }
}

export default ClientReview
