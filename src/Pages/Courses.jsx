import React, { useEffect, useState } from "react";
import Course from "../data/courses";
import Card from "../components/Card/Card";
import "./courses.css";
import Filters from "../components/Course/Filters";
import { useSearchParams } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("sort") === "high" && courses.sort((item1, item2) => item2.rating - item1.rating);
  searchParams.get("sort") === "low" && courses.sort((item1, item2) => item1.rating - item2.rating);

  useEffect(() => {
    setSearchParams({});
    const fetchProducts = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
    };
    fetchProducts();
  }, []);

  var main_courses;
  const removePurchasedCourses = (arr1, arr2) => {
    const set = new Set(arr2);
    main_courses = arr1.filter((value) => !set.has(value));
    return main_courses;
  };
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [1, 2, 6, 4, 8];
  // console.log(removePurchasedCourses(arr1, arr2));
  // let filteredCourses = courses;
  // let purchasedCourses = JSON.parse(localStorage.getItem("courses"));
  // removePurchasedCourses(courses, purchasedCourses);
  // console.log(main_courses);

  // let set = new Set([...courses, ...purchasedCourses]);
  // let new_courses = [...set];
  // console.log(new_courses);
  return (
    <>
      <div className="courses">
        <h1>
          {" "}
          <span style={{ textTransform: "uppercase" }}> {searchParams.get("category")} </span>COURSES
        </h1>
        <div className="courses-page-wrapper">
          <Filters />
          <div className="courses-wrapper">
            {Course.map((item) => {
              if (searchParams.get("category") === "Machine Learning") {
                return item.category === "Machine Learning" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Web Development") {
                return item.category === "Web Development" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "ERP") {
                return item.category === "ERP" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Software Testing") {
                return item.category === "Software Testing" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Database Management") {
                return item.category === "Database Management" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Designing") {
                return item.category === "Designing" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Designing") {
                return item.category === "Designing" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "DevOps") {
                return item.category === "DevOps" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Administration") {
                return item.category === "Administration" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Citrix") {
                return item.category === "Citrix" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "UI Path") {
                return item.category === "UI Path" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Cloud Computing") {
                return item.category === "Cloud Computing" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Software Development") {
                return item.category === "Software Development" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "VMWare") {
                return item.category === "VMWare" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Workday") {
                return item.category === "Workday" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "BigData") {
                return item.category === "BigData" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "Cyber Security") {
                return item.category === "Cyber Security" && <Card item={item} key={item.course_name} />;
              }
              if (searchParams.get("category") === "AI") {
                return item.category === "AI" && <Card item={item} key={item.course_name} />;
              }
              return <Card item={item} key={item.course_name} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
