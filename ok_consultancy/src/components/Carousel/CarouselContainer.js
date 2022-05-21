import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousel.css';


const CarouselContainer = () => {
  return (
    <div>
      <div className="carousel_container container p-0 ">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <div className="carousel_img">
              <img className="d-block w-100 " src="images/carousel/image.jpg" alt="First slide" />
            </div>
            <Carousel.Caption className="carousel_items">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="carousel_img">
              <img className="d-block w-100 " src="images/carousel/image2.jpg"  alt="First slide" />
            </div>
            <Carousel.Caption className="carousel_items">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="carousel_img">
              <img className="d-block w-100 "src="images/carousel/image1.jpg"  alt="First slide" />
            </div>
            <Carousel.Caption className="carousel_items">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="carousel_img">
              <img className="d-block w-100 " src="images/carousel/image2.jpg"  alt="First slide" />
            </div>
            <Carousel.Caption className="carousel_items">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="carousel_img">
              <img className="d-block w-100 " src="images/carousel/image3.jpg"  alt="First slide" />
            </div>
            <Carousel.Caption className="carousel_items">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="carousel_img">
              <img className="d-block w-100 " src="images/carousel/image4.jpg"  alt="First slide" />
            </div>
            <Carousel.Caption className="carousel_items">
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselContainer;
