import React, { Component } from 'react';
import "./JoinEventButton.css";

class JoinEventButton extends Component {
    render() {
        return (
            <button className="btn btn-md btnJoinEvent">
                <a href="/join">Join Event</a>
            </button>
        )
    }
}

export default JoinEventButton;