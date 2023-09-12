import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  return (
    
    <div className="hero">
      <div className="hero-intro">
        <h1>Learn, Earn and Upgrade</h1>
        <p>Delivering the latest Tech Courses of the industry</p>
        <Link to={"/courses"}>
          <input type="button" value="Learn More" className="hero-btn" />
        </Link>
      </div>
      <div className="hero-img">
        <img src="../images/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
