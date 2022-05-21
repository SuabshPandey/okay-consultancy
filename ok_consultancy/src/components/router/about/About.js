import React from "react";
import { Carousel } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-0">
            <h1 className="tc  about_desp_title ma_tb">About US</h1>
            <div className="about_img_div ">
              <img
                src="images/oklogo.png"
                alt="about_img"
                className="about_img"
              />
            </div>
          </div>
        </div>
        <div className="row bg_about_desp">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="about_desp_div">
              <h3 className="about_desp tc">OUR MISSION</h3>
              <p className="about_desp_para">
                At OKAY , we believe in shaping the future of our students who
                want to enhance their academic career through the global
                platform. Our values and beliefs are equally reinforced through
                numerous ways to provide the most transparent, honest and
                efficient services under one roof for prospective students to
                make bright future.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <h1 className="tc about_desp_title ma_tb">Our Team</h1>

        <div className="row about_team_div justify-content-center        align-items-center">
          <div className="col-lg-6">
            <div className="about_intro_div">
              <h3 className="tc intro_name">MR. Rupesh Khanal (RK)</h3>
              <p className="tc intro_name">
                <em> CEO </em>
                <p> OKAY International Education Consultancy </p>
              </p>
              <p className="intro_position_desp">
                Greetings from OKAY Education!!! <br />
                The possibilities are limitless. Dreams and aspirations are
                sitting there to be accomplished. All you have to do is trust
                yourself, believe in your abilities and chase your dreams as if
                there will be no tomorrow. At OKAY Education, we dare our
                students to open their eyes, spread their arms and grab the
                moment to define their future. We assist them to comb through
                the possible alternatives, help them navigate through any of
                their ambiguity and guide them towards their desired goal and
                destiny. On the other hand, we work very closely with our
                partner institutions to not only promote and recruit deserving
                students for their esteemed institutions, but also provide them
                with holistic support in order to establish their institution’s
                brand value in the Nepalese market for a long run. While doing
                this, we always keep student’s best interest as the core of our
                operational values and our sole purpose is to show them with the
                ideal pathway towards their craved future. As a result, we have
                completed almost two decades of student centric operations and
                established ourselves as a prominent brand when it comes to
                study abroad consultation in the Nepalese market.
              </p>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="intro_img_div">
              <img
                src="images/about/rupesh.jpeg"
                alt="rupesh_img"
                className="intro_img"
              />
            </div>
          </div>
        </div>
        <div className="row about_team_div justify-content-center        align-items-center">
          <div className="col-lg-6 p-0">
            <div className="intro_img_div">
              <img
                src="images/about/sanjay.jpg"
                alt="rupesh_img"
                className="intro_img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_intro_div">
              <h3 className="tc intro_name">Mr. Sanjay Thakurathi</h3>
              <p className="tc intro_name">
                <em> Software Department </em>
                <p> OKAY International Education Consultancy </p>
              </p>
              <p className="intro_position_desp"></p>
            </div>
          </div>
        </div>
        <h1 className="tc about_desp_title ma_tb">Our Developer</h1>

        <div className="row about_team_div justify-content-center        align-items-center">



          <div className="col-lg-6">
            <div className="about_intro_div">
              <h3 className="tc intro_name">Mr. Subash Pandey</h3>
              <p className="tc intro_name">
                <em> React JS Developer </em>
                <p> OKAY International Education Consultancy </p>
              </p>
              <p className="intro_position_desp"></p>
            </div>
          </div>


          <div className="col-lg-6 p-0">
            <div className="intro_img_div">
              <img
                src="images/about/subash1.jpg"
                alt="rupesh_img"
                className="intro_img"
              />
            </div>
          </div>

          
        </div>


        <h1 className="tc about_desp_title ma_tb">Life at OKAY</h1>
        <div className="row about_team_div justify-content-center        align-items-center">
          <div className="col-lg-6">
            <div className="about_intro_div">
              <h3 className="tc intro_name">Let's be a part of </h3>
              <p className="tc intro_name">
                OKAY International Education Consultancy
              </p>
              <p className="intro_position_desp"></p>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <Carousel fade>
              <Carousel.Item interval={3000}>
                <div className="carousel_img">
                  <img
                    className="d-block w-100 "
                    src="images/about/lifeokay.jpg"
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <div className="carousel_img">
                  <img
                    className="d-block w-100 "
                    src="images/carousel/image1.jpg"
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <div className="carousel_img">
                  <img
                    className="d-block w-100 "
                    src="images/carousel/image2.jpg"
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <h1 className="tc about_desp_title ma_tb">Our Success Stories</h1>
        <div className="success_stories">
          <div className="row">
            <div className="col-lg-12 p-0">
              <Carousel>
                <Carousel.Item interval={2000}>
                  <div className="about_carousel_img">
                    <img
                      className="d-block w-100 "
                      src="images/about/success1.jpg"
                      alt="First success"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <div className="about_carousel_img">
                    <img
                      className="d-block w-100 "
                      src="images/about/success2.png"
                      alt="Second Success"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
