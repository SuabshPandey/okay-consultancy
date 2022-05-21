// import { Carousel } from "bootstrap";
import React from "react";
import CarouselContainer from "../Carousel/CarouselContainer";
import AboutOk from "../AboutOk/AboutOk";
import CountryUI from "../router/country/CountryUI";
// import Header from '../Header/Header'
import "./Home.css";
import HomeCourses from "../Courses/HomeCourses";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Carousel Container Section  */}

      <div className="container-fluid ma_tb">
        <div className="row">
          <div className="col-lg-10">
            <CarouselContainer />
          </div>
          <div className="col-lg-2 apply_form">
            <h3>OUR VISION</h3>
            <p>
              OKAY mission is to guide the students from the first stage to the
              final stage in the process of leading them to their education
              destination.
            </p>
            <h3>OUR GOAL</h3>
            <p>
              OKAY is the pathway to our dreamed destiny. The goal of OKAY is to
              serve the students locally and internationally and expand its
              services worldwide.
            </p>
            <div className="apply">
              <h5 className="contact_form_detail">
                Apply for free counselling
              </h5>
              <NavLink
                className="custom_contact_btn btn btn-lg btn-block ma_b"
                to="/contact"
              >
                Apply
                <span>
                  <i class="fas fa-paper-plane"></i>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* About Consultancy Section  */}

      <section className="about_ok_section tc ma_tb">
        <AboutOk />
      </section>

      {/* Country Section  */}

      <section className="country_section">
        <div className="container-fluid country_bg ma_t">
          <h2 className="tc wc pa_tb">THE BENCHMARK FOR ABROAD STUDIES</h2>
          <CountryUI />
        </div>
      </section>

      {/* Popular Courses Section  */}

      <section>
        <div className="container-fluid course_bg">
          <div className="container">
            <div className="row ma_t">
              <h2 className="tc pa_t ">Popular Courses</h2>
            </div>
            <div className="row">
              <HomeCourses />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
