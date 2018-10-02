import React from 'react';
import "./EventsList.css";

export const EventsList = props => (
  
  <div>
    <h3 id="eventsListTitle">Events</h3>
    <ul id="accordionEvents" className="accordion list-group">{props.children}</ul>
  </div>
);
  
export default EventsList;