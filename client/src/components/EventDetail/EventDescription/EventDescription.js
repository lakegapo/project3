import React, { Component } from 'react';
import './EventDescription.css';
import EDDescription from "../EDDescription/EDDescription";


const EventDescription = props => (
  <div id="eventDescription" className="container">
    <div className="container-fluid">
      <h2 className="eventDescriptionHeader">Event Description</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-sm-12">
        <EDDescription
          body={props.body}
        />
      </div>
    </div>
  </div>
);

export default EventDescription;