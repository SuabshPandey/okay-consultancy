import React from "react";
import { NavLink } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ma_tb">
            <h1 className="course_heading tc">
              Available Courses at OKAY INTERNATIONAL
            </h1>
            <h3 className="course_heading tc">English Proficiency Tests</h3>
            <h6 className="course_heading tc">
              We offer IELTS coaching to all our registered students and also
              help them in booking their IELTS test date at the British Council.
            </h6>
          </div>
        </div>
        <div className="">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="courses_list">
                International English Language Testing System (IELTS)
              </h2>

              <p className="courses_desp">
                The International English Language Testing System (IELTS) is
                designed to help you work, study or migrate to a country where
                English is the native language.{" "}
              </p>
              <p className="courses_desp">
                This includes countries such as Australia, Canada, New Zealand,
                the UK and USA. The IELTS online courses are ideal for those
                with at least an intermediate level of English proficiency
                (approximately IELTS Band 5 or TOEFL 520 equivalent). Mentioned
                below are details of courses available.
              </p>
              <h4 className="courses_list">
                What is the purpose of the ielts test?
              </h4>
              <p className="courses_desp">
                If you are looking to work, live or study in an English-speaking
                country, then you must be able to demonstrate a high level of
                English language ability. English is the third most spoken
                language in the world, with 379 million speakers worldwide.
                Being able to communicate in the native language of the country
                you wish to work or study in, has a wide range of benefits. It
                is also essential for job opportunities as well as integration
                into the community. IELTS is the most popular test for those
                looking to migrate to Australia, Canada, New Zealand and the UK.
                It is globally recognised by more than 11,000 employers,
                universities, schools and immigration bodies including 3,400
                institutions in the USA.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="course_img_div">
                <img
                  src="images/course/ielts.png"
                  alt="course_ielts"
                  className="course_img"
                />
              </div>
            </div>
          </div>
          <hr className="ma_tb" />
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="courses_list">Pearson Test of English (PTE)</h2>

              <p className="courses_desp">
                PTE stands for Pearson Test of English. It is an international
                computer-based English Competency test. To sit the test,
                candidates need to register online and sit their test in an
                authorized PTE test center. There are a lot of these centers
                around the world.
              </p>
              <h4 className="courses_list">What is the PTE Academic?</h4>
              <p className="courses_desp">
                The PTE (Pearson Test of English) Academic is the English test
                for study abroad and immigration, with results typically
                available in five business days. It’s one of the tests that the
                Australian government accepts as part of their visa application
                process. The PTE Academic assesses listening, reading, speaking,
                and writing all via computer in a single 3-hour test session.
                You will need to attend a secure Pearson test center. You will
                use a computer with a headset to listen, read and respond to
                questions. There are four parts to the test: Speaking, Writing,
                Listening, and Reading. There are twenty different question
                formats, ranging from multiple choices to essay writing and
                interpreting information. These questions are designed to test
                how proficient you are with English.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="course_img_div">
                <img
                  src="images/course/pte.png"
                  alt="course_ielts"
                  className="course_img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="course_btn tc ma_tb">
          <NavLink className="custom_course_btn btn btn-outline-dark btn-large btn-block" to="/contact">
            
            Book your seats now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Courses;
