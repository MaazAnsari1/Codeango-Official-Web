import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <Link className="link" to={`/courses/${item.course_name}`}>
          <div className="card-img">
            <img className="img" src={item.img} alt=""></img>
          </div>

          <div className="card-name">
            <p>{item.course_name.slice(0, 35)}...</p>
          </div>
        </Link>
        <div className="bottom">
          <div className="card_price">
            <p>₹{item.price} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
