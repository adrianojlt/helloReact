import React, { Component } from "react";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

class Header extends Component {

    render () {
        
        const { location } = this.props;

        return (

          <div className="">

            <Navbar bg="primary" expand="lg" variant="dark">

                <div className="container-fluid">
                    
                    <Navbar.Brand href="/">Hello React</Navbar.Brand>

                    <Navbar.Toggle aria-controls="main_nav" />

                    <Navbar.Collapse id="main_nav">

                        <Nav activeKey={location.pathname}>

                            <NavDropdown title="React" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/react/jsx">JSX</NavDropdown.Item>
                                <NavDropdown.Item href="/react/props">Props</NavDropdown.Item>
                                <NavDropdown.Item href="/react/state">State</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/forms">Forms</Nav.Link>
                            <Nav.Link href="/bootstrap">Bootstrap</Nav.Link>
                            <Nav.Link href="/apps">Apps</Nav.Link>

                        </Nav>

                        <Nav className=" ms-auto" activeKey={location.pathname}>

                            <Nav.Link href="/Temp">Temp</Nav.Link>
                            <Nav.Link href="/Temp">Settings</Nav.Link>

                            <NavDropdown title="About" drop="down" className="justify-content-end">
                                <NavDropdown.Item href="">This</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Contact">Me</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                    </Navbar.Collapse>

                </div>

            </Navbar>


            {/*
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <a href="#" className="navbar-brand">
                  Nav Template{" "}
                </a>

                <button
                  type="button"
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse02"
                >
                  <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse02">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item dropdown">

                      <NavDropdown title="React" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/react/jsx">
                          JSX
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/react/props">
                          Props
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/react/state">
                          State
                        </NavDropdown.Item>
                      </NavDropdown>

                    </li>

                    <li>
                      <Nav.Link href="/forms">Forms</Nav.Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/bootstrap">
                        Bootstrap
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/apps">
                        Apps
                      </a>
                    </li>
                  </ul>

                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Settings
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Me
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            */}

          </div>
        );
    }
}

export default Header