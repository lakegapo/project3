import React, { Component } from 'react';
import "./CreateEventButton.css";

class CreateEventButton extends Component {
    render() {
        return (
            <button className="btn btn-md btnCreateEvent">
                <a href="/create">Create Event</a>
            </button>
        )
    }
}

export default CreateEventButton;