import React, { Component } from 'react';
import "./Page404.css";
import travolta from "./travolta.gif";
import { Navbar } from "../../components/Navbar/Navbar";

class Page404 extends Component {

    render() {
        return (
            <div className="Page404">
                <Navbar />
                <div className="container-fluid Page404">
                    <div className="container contentWrapper">
                        <div className="row justify-content-center">
                            <div className="col-sm-auto">
                                <div className="errorDiv">
                                    <h2 className="red">Error 404</h2>
                                    <h2 className="red">Page not found</h2>
                                    <h2 className="msg">We'd totally be down for this page, but it doesn't exist ):</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <img className="image404" src={travolta} alt="carlton misses a shot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page404;
