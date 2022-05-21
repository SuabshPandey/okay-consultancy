import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Result = () => {
  return (
    <div className="">
      <p>
        Your Information has been successfully submitted. We will reach you out
        within 48 hours.
      </p>
    </div>
  );
};

const Contact = () => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4v816h",
        "template_z4quk7e",
        e.target,
        "user_JCFgeHf14jT7XPQ2dYh8R"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((err) => {
        console.log(err.text);
      });
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 4000);

  return (
    <div className="container ma_tb">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="contact_heading">Get In Touch</h2>
          <div className="row">
            <div className="col-lg-12">
              <p className="contact_para">
                Send us your enquiry and we promise to get back to you as soon
                as we can
              </p>
            </div>
            <div className="col-lg-12">
              <p className="contact_para">
                <i className="custom_contact_icon fas fa-map-marker-alt"></i>
                Bank road 28, Bagbazzar, Kathmandu, Nepal
              </p>
            </div>
            <div className="col-lg-12">
              <p className="contact_para">
                <i className="custom_contact_icon fas fa-phone-alt"></i>
                01-4221166,  9862971953( viber / What's app)/ 9808219199
              </p>
            </div>
            <div className="col-lg-12">
              <p className="contact_para">
                <i className="custom_contact_icon fas fa-envelope"></i>
                okay.iec@gmail.com/ ceo@okayconsult.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg_contact">
          <div className="row form-group p-4">
            <div className="col-lg-12">
              <h3 className="contact_heading">Leave Your Enquiry</h3>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="row">
              <div className="col-lg-6 p-3">
                <input
                  type="text"
                  name="full_name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col-lg-6 p-3 ">
                <input
                  type="text"
                  name="user_email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-lg-6 p-3">
                <input
                  type="number"
                  name="phone_number"
                  className="form-control"
                  placeholder="Mobile Number"
                  required
                />
              </div>

              <div className="col-lg-6 p-3">
                <select
                  className="form-control interest_location "
                  name="location"
                  // onChange={handleInputs}
                  // value={userData.location}
                >
                  <option value="Australia">Australia</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="NewZealand">NewZealand</option>
                  <option value="UK">United Kindom</option>
                </select>
              </div>
              <div className="col-lg-6 ">
                <label className="contact_form_detail">Grade</label>
                <select
                  className="form-control interest_location "
                  name="grade"
                >
                  <option value="twelve">+2</option>
                  <option value="bachelor">Bachelor</option>
                </select>
              </div>
              <div className="col-lg-6">
                <label className="contact_form_detail">Passed Year</label>
                <input name="year" className="form-control" type="date" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text_area">
                <textarea
                  name="message"
                  className="form-control ma_tb"
                  placeholder="If other please provide your details here (eg: Academic Percentage, IELTS Score)"
                  id=""
                  required
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="custom_contact_btn btn btn-lg btn-block ma_b"
                >
                  Submit for Feedback <i class="fas fa-paper-plane"></i>
                </button>
                <div className="row">{result ? <Result /> : null}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
