import React from "react";
import "./Navbar.css";
import whosdownblack from "../../static/images/WhosDownBlack.png";

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbarfont nav-item">
                <a className="navbar-brand" href="/home"><img className="navbarLogo" src={whosdownblack}/></a>
            </div>

            <div className="navbarfont nav-item">
                <a className="nav-link" href="/home">Categories</a>
            </div>

            <div className="navbarfont nav-item">
                <a className="fa nav-link" href="/logout">&#xf011;</a>
            </div>
        </nav>
    )
}