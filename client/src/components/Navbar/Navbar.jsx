import React from 'react'
import {Nav, NavItem, Navbar} from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#home">React-Bootstrap</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                Link
                </NavItem>
            </Nav>
        </Navbar>
    )    
}

export default NavbarComponent;
