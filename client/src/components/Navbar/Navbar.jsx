import React from 'react'
import { Nav, NavItem, Navbar } from "react-bootstrap";
import './NavbarStyle.css'

const NavbarComponent = () => {
    return (

        <Navbar className='navStyle'>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Who's Down</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/Home">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="/#">
                    Logout
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent;
