import React from "react";
import "./events.css";
import Events from "../events.json";
import EventCard from "../components/EventCard/EventCard";
import courses from "../courses.json";

const EventsPage = () => {
  return (
    <>
      <div className="events">
        <h1>Our Events</h1>
        <div className="events_wrapper">
          {courses.map((item) => {
            return <EventCard item={item} key={item.key_word} />;
          })}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
