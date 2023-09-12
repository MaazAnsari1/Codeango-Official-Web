import React from "react";
import { Link } from "react-router-dom";
import "./popular.css";
import Courses from "../../data/courses";
import Card from "../Card/Card";
const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-head">
        <h2>Popular Courses</h2>
        <div className="see-all-courses">
          <Link to={"courses"}>See All</Link>
        </div>
      </div>
      <div className="popular-courses_wrapper">
        {Courses.map((item) => {
          return item.isPopular && <Card key={item.course_name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
