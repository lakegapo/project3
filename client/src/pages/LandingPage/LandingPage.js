import React, { Component } from 'react';
import logo from './Untitled.png';
import './LandingPage.css';


class LandingPage extends Component {
    render() {
        return (
            <div id="landingPage" className="container">


                <div className="row justify-content-center">
                    <div className="col-sm-auto">
                        <img id="logo" src={logo} alt="Who's Down" />
                    </div>
                </div>

                <section className="rw-wrapper">
                    <h2 className="rw-sentence">
                        <div class="rw-words rw-words-1">
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
                        <div className="col-sm-12">
                            <button className="landingButton" id="loginButton">Login</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <hr />
                            <button className="landingButton" id="SignupButton">Sign Up</button>
                            <hr />

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <button className="landingButton" id="viewEventsButton">View Events</button>
                        </div>
                    </div>
                </div>

                <h4 id="copyright">&copy; 2018 Team Snowstorm</h4>


            </div>
        );
    }
}

export default LandingPage;