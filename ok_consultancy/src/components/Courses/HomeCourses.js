import React from "react";
import courseList from "./courseList";
import { NavLink } from "react-router-dom";
import CourseUI from "./CourseUI";

const HomeCourses = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {courseList.map((items) => {
            return (
              <div className="col-lg-6 col-md-12 d-flex justify-content-around">
                <CourseUI
                  key={items.id}
                  courseName={items.courseName}
                  courseImg={items.courseImg}
                />
              </div>
            );
          })}
        </div>
        <div className="home_course_btn tc ma_tb">
          <NavLink
            className="btn btn-outline-success custom_contact_btn btn-lg  btn-block"
            to="/classes"
          >
            Explore Courses
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
