import React, { Component } from 'react';
import "./JoinEventButton.css";

const JoinEventButton = props => (
    <button className="btn btn-md btnJoinEvent">
        <a href="/join" onClick={props.onClick}>Join Event</a>
    </button>
)

export default JoinEventButton;