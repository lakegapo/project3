import React, { Component } from 'react';
import '../EditForm/EditForm';
import './EditForm.css';
import logo from './Untitled.png';

class EditForm extends Component {
    render() {
        return (
            <div id="createForm" className="container">


                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <img id="formLogo" src={logo} alt="Who's Down"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <h2 id="createHeader">Create an Event</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <form>
                            <div className="form-group">
                                <label for="eventName">Event Name</label>
                                <input type="eventName" className="form-control" id="eventName" aria-describedby="eventName" placeholder="Enter event name" />
                            </div>
                            <div className="form-group">
                                <label for="eventAddress">Address</label>
                                <input type="eventAddress" className="form-control" id="eventAddress" placeholder="Enter event address" />
                            </div>
                            <div class="form-group">
                                <label for="eventDescription">Event Description</label>
                                <textarea class="form-control" id="eventDesciption" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn submitButton">Create Event</button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}

export default EditForm;