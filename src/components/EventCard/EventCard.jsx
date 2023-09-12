import React, { useState } from "react";
import "./eventcard.css";
import { Link } from "react-router-dom";

const EventCard = ({ item }) => {
  return (
    <>
      <div className="eventcard">
        <Link className="link" to={`/events/${item.key_word}`}>
          <div className="event-img">
            <img className="img" src={item.img} alt=""></img>
          </div>

          <div className="event-name">
            <p>{item.course_name.slice(0, 35)}...</p>
          </div>
        </Link>
        <div className="bottom">
          <div className="event_time">
            <p>{item.event_time}</p>
            <p>{item.event_days}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
