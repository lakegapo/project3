import React from 'react';
import './EventDescription.css';
var moment = require('moment');



const EventDescription = props => (
  <div id="eventDescription" className="container">
    <div className="container-fluid">
      <h2 className="eventDescriptionHeader">Event Details</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-sm-12">
        <div className='descriptionStyle'><i className='fa'>&#xf073;</i>Event Starting: {moment(props.eventDate).format("MMM Do, YYYY hh:mm A")}</div>
        <div className='descriptionStyle'><i className='fa'>&#xf2be;</i>Hosted By: {props.createdBy}</div>
        <div className='descriptionStyle'><i className='fa'>&#xf075;</i>{props.description}</div>
      </div>
    </div>
  </div>
);

export default EventDescription;