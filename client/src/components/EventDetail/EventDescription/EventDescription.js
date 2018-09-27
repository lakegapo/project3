import React from 'react';
import './EventDescription.css';



const EventDescription = props => (
  <div id="eventDescription" className="container">
    <div className="container-fluid">
      <h2 className="eventDescriptionHeader">Description</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-sm-12">
        <a>Event Starting: {props.timestampCreated}</a>
        <div>Posted By: </div>
        <p className='descriptionStyle'>{props.description}</p>
      </div>
    </div>
  </div>
);

export default EventDescription;