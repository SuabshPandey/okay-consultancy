import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 ma_t p-0">
              <h2 className="footer_title">Contact Us</h2>
              <ul className="p-0">
                <li>Putalisadak, Kathmandu</li>
                <li>Email: okay.iec@gmail.com</li>
                <li>Phone: 01-4221166, +977 9862971953</li>
                <li>Website: www.okay.edu.np</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h2 className="footer_title">Trainings On</h2>
              <ul className="p-0">
                <li>IELTS</li>
                <li>PTE</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h2 className="footer_title">Our Services</h2>
              <ul className="p-0">
                <li>Comprehensive Counselling</li>
                <li>Application Processing</li>
                <li>Advice on Selection of Programs</li>
                <li>Scholarship Application Assistance</li>
                <li>Student Visa Guidance</li>
              </ul>
            </div>
            <div className="col-lg-3 p-0 map_div">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3566132847436!2d85.31551961456535!3d27.706273632147077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f56496bef9%3A0xb524499217b02e39!2sOKAY%20INTERNATIONAL%20education%20consultancy!5e0!3m2!1sen!2snp!4v1635089871210!5m2!1sen!2snp"
                width="300"
                height="150"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 tc ">
              <h4 className=" icon_header text-center">Follow Us on:</h4>
              <span>
                <a rel="noreferrer" href="https://www.facebook.com/okayinternational/" target="_blank"><i className="social_icon  p-3 fab fa-facebook"></i></a>
              </span>
              <span>
                <a rel="noreferrer" href="https://www.facebook.com/okayinternational/" target="_blank"><i className="social_icon  p-3 fab fa-instagram"></i></a>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
