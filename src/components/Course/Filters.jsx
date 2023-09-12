import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./filter.css";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterMobile, setfilterMobile] = useState(false);
  const filterByCategory = (e) => {
    e.preventDefault();
    setSearchParams({ category: e.target.name });
  };

  const resetFilters = (e) => {
    e.preventDefault();
    setSearchParams({});
  };

  return (
    <>
      <div className="filter">
        <div className="clear-all-filters">
          <input className="clear-all" type="button" value="Clear All Filters" onClick={resetFilters} />
        </div>
        <div className="courses-category-container">
          <h2> Filter By Category</h2>
          <div className="courses-category">
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Web Development" value={"Web Development"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="ERP" value={"ERP"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Machine Learning" value={"Machine learning"} id="desc" />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Software Testing" value={"Software Testing"} id="free" />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Database Management" value={"Database Management"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Designing" value={"Designing"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="DevOps" value={"DevOps"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Administration" value={"Administration"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Citrix" value={"Citrix"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="UI Path" value={"UI Path"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Cloud Computing" value={"Cloud Computing"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Software Development" value={"Software Development"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="VMWare" value={"VMWare"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Workday" value={"Workday"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="AI" value={"AI"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Cyber Security" value={"Cyber Security"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="BigData" value={"Big Data"} />
          </div>
        </div>
      </div>
      <div className={filterMobile ? "d_none filter_mobile_btn" : "filter_mobile_btn"}>
        <input type="button" value="Filters" onClick={() => setfilterMobile(true)} />
      </div>
      <div className={filterMobile ? "d_block filter_mobile" : "filter_mobile"}>
        <div className="clear-all-filters">
          <input className="close-filter_btn" type="button" value="Close" onClick={() => setfilterMobile(false)} />
          <input className="clear-all" type="button" value="Clear All Filters" onClick={resetFilters} />
        </div>
        <div className="courses-category-container">
          <h2> Filter By Category</h2>
          <div className="courses-category">
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Web Development" value={"Web Development"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="ERP" value={"ERP"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="machine learning" value={"Machine learning"} id="desc" />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Software Testing" value={"Software Testing"} id="free" />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Database Management" value={"Database Management"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Designing" value={"Designing"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="DevOps" value={"DevOps"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Administration" value={"Administration"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Citrix" value={"Citrix"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="UI Path" value={"UI Path"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Cloud Computing" value={"Cloud Computing"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Software Development" value={"Software Development"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="VMWare" value={"VMWare"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Workday" value={"Workday"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="AI" value={"AI"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="Cyber Security" value={"Cyber Security"} />
            <input onClick={filterByCategory} className="cat-elements" type="button" name="BigData" value={"Big Data"} />
          </div>
        </div>
        {/* <input className="show-filter_result_btn" type="button" value="Show Results" onClick={() => setfilterMobile(false)} /> */}
      </div>
    </>
  );
};

export default Filters;
