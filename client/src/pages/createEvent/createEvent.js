import React, { Component } from 'react';
import axios from "axios";
import './createEvent.css';
import logo from './logo.png';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';



class CreateEvent extends Component {



    state = {
        name: "",
        category: "",
        date: new Date(),
        time: "00:00",
        address1: "",
        address2: "",
        citystate: "",
        zip: "",
        description: ""
    }



    // Grabbing 
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    // Grabbing address
    handleAddress1Change = (event) => {
        this.setState({ address1: event.target.value });
    }

    // Grabbing address
    handleAddress2Change = (event) => {
        this.setState({ address2: event.target.value });
    }

    // Grabbing citystate
    handleCityStateChange = (event) => {
        this.setState({ citystate: event.target.value });
    }

    // Grabbing zip
    handleZipChange = (event) => {
        this.setState({ zip: event.target.value });
    }

    // Grabbing description
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    // Grabbing date
    handleDateChange = date => {
        this.setState({ date });
    }

    // Grabbing category
    handleCategoryChange = (event) => {
        this.setState({ category: event.target.value });
    }

    // Grabbing time
    handleTimeChange = (time) => {
        this.setState({ time });
    }

    // Console logs state and submits form. Redirects to Event Detail Page pending
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(sessionStorage.getItem("userId"));
        console.log("Event Creation Details");
        console.log("this.state.name: ", this.state.name);
        console.log("this.state.time: ", this.state.time);
        console.log("this.state.category: ", this.state.category);
        console.log("this.state.date: ", this.state.date);
        console.log("this.state.address1: ", this.state.address1);
        console.log("this.state.address2: ", this.state.address2);
        console.log("this.state.citystate: ", this.state.citystate);
        console.log("this.state.zip: ", this.state.zip);
        console.log("this.state.description: ", this.state.description);
        const loggedUser = sessionStorage.getItem("userId");
        axios.post("/api/events", {
            name: this.state.name,
            category: this.state.category,
            date: this.state.date,
            time: this.state.time,
            address1: this.state.address1,
            address2: this.state.address2,
            citystate: this.state.citystate,
            zip: this.state.zip,
            description: this.state.description,
            UserId: loggedUser
        })
        .then(resp => {
            window.location.assign("/eventdetail/" + resp.data.id);
        })
        .catch(err => {
            console.error(err)
        });
    };

    render() {
        return (
            <div id="createForm" className="container">


                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <img id="formLogo" src={logo} alt="Who's Down" />
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
                                <label htmlFor="eventName">Event Name</label>
                                <input type="eventName" className="form-control" id="eventName" onChange={this.handleNameChange} aria-describedby="eventName" placeholder="Enter event name" />
                            </div>
                            <div className="form-row form-group">
                                <div className="col">
                                    <label htmlFor="category">Category</label>
                                    <select id="inputCategory" className="form-control" onChange={this.handleCategoryChange}>
                                        <option defaultValue disabled>Category</option>
                                        <option>Gaming</option>
                                        <option>Basketball</option>
                                        <option>Bicycle</option>
                                        <option>Canyon Runs</option>
                                        <option>Pokemon Go</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label id="dateHeader" htmlFor="eventDate">Date of Event</label>
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <Calendar
                                            onChange={this.handleDateChange}
                                            value={this.state.date}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="eventTime">Time of Event</label>
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                <TimePicker
                                    onChange={this.handleTimeChange}
                                    value={this.state.time}
                                />
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventAddress1">Address</label>
                                <input type="eventAddress" className="form-control eventAddress" id="eventAddress1" onChange={this.handleAddress1Change} placeholder="Enter event address" />
                                <input type="eventAddress" className="form-control eventAddress" id="eventAddress2" onChange={this.handleAddress2Change} placeholder="(optional)" />
                            </div>
                            <div className="form-row form-group">
                                <div className="col">
                                    <label htmlFor="cityState">City, State</label>
                                    <select id="inputCityState" className="form-control" onChange={this.handleCityStateChange}>
                                        <option defaultValue>Choose...</option>
                                        <option>Irvine, CA</option>
                                        <option>Los Angeles, CA</option>
                                        <option>Orange, CA</option>
                                        <option>San Francisco, CA</option>
                                        <option>Las Vegas, NV</option>
                                        <option>Phoenix, AZ</option>
                                        <option>Portland, OR</option>
                                        <option>Seattle, WA</option>
                                        <option>San Diego, CA</option>
                                        <option>Blood Gulch, H2</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="zip">ZIP</label>
                                    <input type="text" className="form-control" placeholder="Enter ZIP" onChange={this.handleZipChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDescription">Event Description</label>
                                <textarea className="form-control" id="eventDesciption" onChange={this.handleDescriptionChange} rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn submitButton" onClick={this.handleFormSubmit}>Create Event</button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}

export default CreateEvent;