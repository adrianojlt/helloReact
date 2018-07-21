import React, { Component } from 'react';
import {
  Route,
  //NavLink,
  Link,
  HashRouter
} from 'react-router-dom';
import Home from './Home';
import Forms from './Forms';
import logo from './logo.svg';
import {
  Container,
  Col,
  Row,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Collapse,
  NavLink,
  Nav
} from 'reactstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
      tetherConfig: {
        target: '#tether',
        attachment: 'middle left',
        targetAttachment: 'middle right',
        classPrefix: 'bs-tether',
        classes: { element: 'popover', enabled: 'open' },
        constraints: [
          { to: 'scrollParent', attachment: 'together none' },
          { to: 'window', attachment: 'together none' }
        ]
      }
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderDefaultContent() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  renderNavMenu() {
    return (
      <HashRouter>
        <div>

          <Navbar /*color="inverse" dark*/ expand>
            <NavbarToggler right="true" onClick={this.toggle} />
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/form">Forms</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <h1>Navigation</h1>

          <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Forms</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Forms} />
          </div>

        </div>
      </HashRouter>
    );
  }

  renderTmpMenu() {
    return (
      <div></div>
    );
  }

  renderApp() {
    return (
      <HashRouter>
        <Container fluid>
          <header>
            <Row>
              <Col sm="12" md="12" lg="12">
                <Navbar className="navbar-inverse" color="light" expand>
                  <NavbarToggler right="true" onClick={this.toggle} />
                  <NavbarBrand href="/">
                    Brand
                  </NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink href="/form">Link 1</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/report">Link 2</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </Col>
            </Row>
          </header>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Forms} />
          </div>
        </Container>
      </HashRouter>
    );
  }

  simpleMenu() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      /*
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      */
    );
  }

  render() {
    return (
      //this.simpleMenu()
      //this.renderDefaultContent()
      //this.renderNavMenu()
      this.renderApp()
      /*
      <h1>hello React</h1>
      */
    );
  }
}

export default App;
