import React, { Component } from 'react';
import './EDDescription.css';

// let edit = 1;

const EDDescription = props => (
  < div id="EDDescription" className="container" >
    <p id="eventInfo">{props.body}
    </p>
  </div >
);

export default EDDescription;