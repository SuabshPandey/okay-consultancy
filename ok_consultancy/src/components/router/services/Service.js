import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="container-fluid ">
      <div className="row service_bg justify-content-center align-items-center ma_b">
        <div className="col-lg-6">
          <h1 className="tc service_heading">OUR SERVICES</h1>
        </div>
        <div className="col-lg-6">
          <div className="service_logo_div">
            <img
              src="images/logo.jpg"
              alt="service_logo"
              className="service_logo tc "
            />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row justify-content-center ma_tb">
          <div className="col-lg-6">
            <h2 className="services_list">Comprehensive Counselling</h2>
            <h6 className="service_desp">
              Our certified counsellors, are experts in professionally guiding
              students to make their choice of course and country of study. They
              assist the students by providing authentic information, by making
              the different options available to them and by helping them choose
              the right course. Student feedback surveys have confirmed that
              students counseled by OKAY International are far better informed
              than others.
            </h6>
          </div>
          <div className="col-lg-6">
            <div className="service_img_div">
              <img
                src="images/service/service.jpg"
                alt="service_img"
                className="service_img"
              />
            </div>
          </div>
        </div>
        <hr className="ma_tb" />
        <div className="row justify-content-center ">
          <div className="col-lg-12 ma_t">
            <h2 className="services_list">Application Processing</h2>
            <h6 className="service_desp">
              Keeping in mind that students often find the application process
              to be overwhelming, our team of expert counselors do a lot of
              hand-holding to make them understand the procedures. We provide
              step-by-step guidance on the application process, which includes
              documentation and providing updated information on the
              institutions represented by us.
            </h6>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center ">
          <div className="col-lg-12 ma_t">
            <h2 className="services_list">Advice on Selection of Programs</h2>
            <h6 className="service_desp">
              We are constantly in touch with the universities we represent, and
              keep ourselves updated about the variety of courses and programs
              of study they offer. This helps us guide students more
              effectively, which in turn helps the students in taking the right
              decision on choosing the course of study matching their
              candidature.
            </h6>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-12 ma_t">
            <h2 className="services_list">
              Scholarship Application Assistance
            </h2>
            <h6 className="service_desp">
              Most universities offer some form of scholarship and each has its
              own eligibility criteria. We offer guidance by providing
              information and assistance to the applicants keen to apply for
              scholarships or other financial aid, that may be on offer to
              international students.
            </h6>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-12 ma_t">
            <h2 className="services_list">Student Visa Guidance</h2>
            <h6 className="service_desp">
              When the student reaches the visa stage, OKAY International has a
              special team of visa facilitators who work with students and their
              families to make sure the visa processing system is hassle-free.
              Such guidance also ensures a strong possibility of successful visa
              approval. As a matter of fact, OKAY International has been vetted
              and selected by the Australian department of Home Affairs to
              provide e-lodgment services from all our offices to make visa
              processing faster, easier and greener. Online lodging of visa is
              also possible for other countries like New Zealand, United
              Kingdom, Canada, Ireland, Germany & US.
            </h6>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-12 ma_t">
            <h2 className="services_list">Pre-departure Support</h2>
            <h6 className="service_desp">
              After visa is granted, we offer pre-departure briefing sessions to
              all our students. It is an informal session to educate them about
              various characteristics of the study destination. The session
              gives them an opportunity to clarify last minute queries and get
              tips to help them make their experience of studying abroad a truly
              rewarding one. This is our way to show that our services are not
              limited to helping students get admissions only, but that it
              extends much beyond. To us, what matters most is the relationship
              that we build with our students and their families.
            </h6>
            <hr />
          </div>
        </div>
      </div>
      <div className="service_banner_div p-4">
        <img
          className="service_banner_img"
          src="images/service/service.png"
          alt="service_banner"
        />
      </div>
    </div>
  );
};

export default Service;
