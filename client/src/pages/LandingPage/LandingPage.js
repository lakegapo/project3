import React, { Component } from 'react';
import logo from './Untitled.png';
import axios from "axios";
import './LandingPage.css';
import GoogleLogin from 'react-google-login';
import API from '../../utils/API';


class LandingPage extends Component {
    render() {
        const responseGoogle = response => {
            console.log(response);
        }
        //sends googledata to DB and recieves DB user object back as response, then sets DB id in session storage
        const createUser = response => {
            axios.post("/api/user", response.profileObj)
                .then(resp => {
                    sessionStorage.setItem("userId", resp.data.id);
                    window.location.assign("/listedevents");
                })
                .catch(e => {
                    console.error(e)
                })
        };
        return (
            <div id="landingPage" className="container-fluid">

            
                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <img id="logo" src={logo} alt="Who's Down" />
                    </div>
                </div>

                <section className="rw-wrapper">
                    <h2 className="rw-sentence">
                        <div className="rw-words rw-words-1">
                            <span>Hang Out?</span>
                            <span>Biking?</span>
                            <span>Car Meet?</span>
                            <span>Art Class?</span>
                            <span>Networking?</span>
                            <span>Basketball?</span>
                        </div>
                        <br />
                        <span>I'm down.</span>
                    </h2>
                </section>
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <h2 id="landingPageText">
                            Who's Down? is an app that helps you easily find people with common ground.
                            Search for and join events all around the world or create your own!
                        </h2>
                    </div>
                </div>


                <div className="buttonContainer">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 buttonRow">
                            <GoogleLogin
                                clientId="1045470370648-ur33n32gcgim4acrnq904b91b1q22cjc.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={createUser}
                                // onFailure={responseGoogle}
                                className="landingButton"
                                id="loginButton"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 buttonRow">
                            <a href="/home"><button className="landingButton" id="viewEventsButton">View Events</button></a>
                        </div>
                    </div>
                </div>

                <h4 id="copyright">&copy; 2018 Team Snowstorm</h4>

            </div>
        );
    }
}

export default LandingPage;