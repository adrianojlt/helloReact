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

                        <NavDropdown title="React" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/jsx">JSX</NavDropdown.Item>
                            <NavDropdown.Item href="/props">Props</NavDropdown.Item>
                            <NavDropdown.Item href="/state">State</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/forms">Forms</Nav.Link>
                        <Nav.Link href="/bootstrap">Bootstrap</Nav.Link>
                        <Nav.Link href="/apps">Apps</Nav.Link>

                    </Nav>

                    <Nav className="ml-auto" activeKey={location.pathname}>

                        <Nav.Link href="/Temp">Temp</Nav.Link>
                        <Nav.Link href="/Settings">Settings</Nav.Link>

                        <NavDropdown title="About" drop="down" alignRight className="dropdown-menu-right">
                            <NavDropdown.Item href="">This</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Contact">Me</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default Header