import React from "react";
import { Link } from "react-router-dom";
// import myCourses from "../data/courses";
import "./MyCourses.css";
import { useDispatch, useSelector } from "react-redux";
const MyCourses = () => {
  const arr = [1];
  const mycourses = JSON.parse(localStorage.getItem("courses")) || [];
  // const mycourses = useSelector((state) => state.myCourses);
  const dispatch = useDispatch();
  return (
    <div className="my_courses">
      {mycourses.length > 0 && <h1>My Courses</h1>}
      <div className="my_courses_wrapper">
        {mycourses.length > 0 ? (
          mycourses.map((item) => {
            return (
              <div className="my_courses_card" key={item.course_name}>
                <div className="my_courses_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="my_courses_content">
                  <h3>{item.course_name}</h3>
                  <p>{item.description.slice(0, 300)}...</p>
                  <a target="_blank" href={item.meeting}>
                    Join Lecture
                  </a>
                  <a target="_blank" href={item.recording}>
                    Lecture Recording
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="my_courses_empty">
            <h2> Sad To Inform You That, You're Not Enrolled In Any Course</h2>
            <h4>
              Not to worry!{" "}
              <Link style={{ color: "#047aed" }} to={"/courses"}>
                Start Your Journey Now{" "}
              </Link>
            </h4>
            <img src="../images/no_courses.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
