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
                        <div className="col-sm-12">
                            <button className="landingButton" id="loginButton" data-toggle="modal" data-target="#loginModal">Login</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <hr />
                            <button className="landingButton" id="SignupButton" data-toggle="modal" data-target="#signupModal">Sign Up</button>
                            <hr />

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <a href=""><button className="landingButton" id="viewEventsButton">View Events</button></a>
                        </div>
                    </div>
                </div>

                <h4 id="copyright">&copy; 2018 Team Snowstorm</h4>

                {/* Login Modal */}
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModalTitle">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="username" className="form-control" id="loginUsername" aria-describedby="loginUsername" placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="loginPassword" placeholder="**********" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn loginButton">Login</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Signup Modal */}
                <div className="modal fade" id="signupModal" tabIndex="-2" role="dialog" aria-labelledby="signupModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModalTitle">Are you down?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="username" className="form-control" id="signupUsername" aria-describedby="signupUsername" placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="signupPassword" placeholder="**********" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn signupButton">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default LandingPage;