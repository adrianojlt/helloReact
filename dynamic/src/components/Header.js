import React, { Component } from "react";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

class Header extends Component {

    render () {
        
        const { location } = this.props;

        return (

            <Navbar bg="primary" expand="lg" variant="dark">
                
                <Navbar.Brand href="/">Hello React</Navbar.Brand>

                <Navbar.Toggle aria-controls="main_nav" />

                <Navbar.Collapse id="main_nav">

                    <Nav activeKey={location.pathname}>

                        <Nav.Link href="/Forms">React</Nav.Link>
                        <Nav.Link href="/Bootstrap">Bootstrap</Nav.Link>
                        <Nav.Link href="#">Apps</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Nav className="ml-auto" activeKey={location.pathname}>

                        <Nav.Link href="/Temp">Temp</Nav.Link>
                        <Nav.Link href="/Settings">Settings</Nav.Link>

                        <NavDropdown title="About" drop="down" alignRight className="dropdown-menu-right">
                            <NavDropdown.Item href="">This</NavDropdown.Item>
                            <NavDropdown.Item href="/Contact">Me</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Another Action</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default Header