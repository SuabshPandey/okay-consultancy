import React from 'react';
import './HomeCourse.css';

const CourseUI = (props) => {
    return (
        <div>
            <div className="course_div ma_tb ">
                <div className="home_course_img_div">
                    <img className="home_course_img" src={props.courseImg} alt="courseImg" />
                </div>
                <div className="course_body tc">
                    <p className="tc home_course_name">{props.courseName}</p>
                </div>
            </div>
            
        </div>
    )
}

export default CourseUI
