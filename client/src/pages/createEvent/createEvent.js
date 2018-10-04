import React, { Component } from 'react';
import axios from "axios";
import GoogleLogin from 'react-google-login';
import './createEvent.css';
import logo from './logo.png';
import { Navbar } from "../../components/Navbar/Navbar";
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';

class CreateEvent extends Component {

    state = {
        name: "",
        category: "Gaming",
        date: new Date(),
        time: "00:00",
        address1: "",
        address2: "",
        citystate: "",
        zip: "",
        description: ""
    }


    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "category" || name === "citystate") {
            value = value.toLowerCase().trim().replace(/ /g, "-");
        }
        this.setState({ [name]: value }, () => { console.log(name, value) });

                

    }

    // Grabbing date
    handleDateChange = date => {
        this.setState({ date });
    }

    // Grabbing time
    handleTimeChange = (time) => {
        this.setState({ time });
    }

    // Console logs state and submits form. Redirects to Event Detail Page pending
    handleFormSubmit = (event) => {
        let ok = true;
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


        // Check for blank fields
        var array = Object.keys(this.state);
        array.forEach(key => {
            if (this.state[key] === "" && key !== "address2" && key !== "citystate") {
                ok = false;
                console.log(key);
                if (key !== "description") {
                    document.querySelector(`input[name=${key}`).style.background = "rgba(255, 192, 203, 1)";
                }
                document.getElementById("eventDesciption").style.background = "rgba(255, 192, 203, 1)";
            } else {
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
                        if (ok) {
                            window.location.assign("/eventdetail/" + resp.data.id);
                        }
                    })
                    .catch(err => {
                        console.error(err)
                    });
            }
        });

        if (ok === false) {
            alert("Please fill out missing items");
        }

    };

    render() {
        const categories = ["Gaming", "Basketball", "Bicycle", "Canyon Runs", "Pokemon Go"];
        const locations = ["Irvine", "Los Angeles", "Orange", "San Francisco", "Las Vegas", "Phoenix", "Portland", "Seattle", "San Diego", "Blood Gulch"];

        // Login
        const responseGoogle = response => {
            console.log(response);
        }

        //sends googledata to DB and recieves DB user object back as response, then sets DB id in session storage
        const createUser = response => {
            axios.post("/api/user", response.profileObj)
                .then(resp => {
                    sessionStorage.setItem("userId", resp.data.id);
                    window.location.reload();
                })
                .catch(e => {
                    console.error(e)
                })
        };

        return (
            <div>
                <Navbar />

                {!sessionStorage.getItem("userId") ?

                    <div id="createFormNotLoggedIn" className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-auto">
                                <h2 className="createNoUserHeader">You must be logged in to create an event</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <GoogleLogin
                                    clientId="1045470370648-ur33n32gcgim4acrnq904b91b1q22cjc.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={createUser}
                                    // onFailure={responseGoogle}
                                    className="loginButtonCreatePage"
                                />
                            </div>
                        </div>
                    </div>

                    :


                    <div id="createForm" className="container-fluid">


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
                            <div className="col-md-auto formDiv">

                                <form>
                                    <div className="form-group">
                                        <label htmlFor="eventName" className=" createLabel">Event Name</label>
                                        <input type="eventName" className="form-control" id="eventName" name="name" onChange={this.handleChange} aria-describedby="eventName" placeholder="Enter event name" />
                                    </div>
                                    <div className="form-row form-group">
                                        <div className="col">
                                            <label htmlFor="category" className=" createLabel">Category</label>
                                            <select id="inputCategory" className="form-control" name="category" onChange={this.handleChange}>
                                                <option defaultValue disabled>Category</option>
                                                {categories.map(name => {
                                                    return <option key={name}>{name}</option>
                                                })}
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
                                        <label htmlFor="eventTime" className=" createLabel">Time of Event</label>
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
                                        <label htmlFor="eventAddress1" className=" createLabel">Address</label>
                                        <input type="eventAddress" className="form-control eventAddress" id="eventAddress1" name="address1" onChange={this.handleChange} placeholder="Enter event address" />
                                        <input type="eventAddress" className="form-control eventAddress" id="eventAddress2" name="address2" onChange={this.handleChange} placeholder="(optional)" />
                                    </div>
                                    <div className="form-row form-group">
                                        <div className="col">
                                            <label htmlFor="cityState" className=" createLabel">City, State</label>
                                            <select id="inputCityState" className="form-control" name="citystate" onChange={this.handleChange}>
                                                <option defaultValue>Choose...</option>
                                                {locations.map(city => {
                                                    return <option key={city}>{city}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="zip" className=" createLabel">ZIP</label>
                                            <input type="text" className="form-control" placeholder="Enter ZIP" name="zip" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventDescription" className="createLabel">Event Description</label>
                                        <textarea className="form-control" id="eventDesciption" name="description" onChange={this.handleChange} rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn submitButton" onClick={this.handleFormSubmit}>Create Event</button>
                                </form>

                            </div>
                        </div>

                    </div>}



            </div>
        );
    }
}

export default CreateEvent;