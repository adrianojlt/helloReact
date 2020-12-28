import React from 'react';

import { withRouter } from 'react-router';

import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import Container  from 'react-bootstrap';

import Home         from './Home';
import Header       from './components/Header';
import Bootstrap    from './components/Bootstrap';
import Forms        from './components/Forms';
import Contact      from './components/Contact';
import Temp         from './components/Temp';

import './App.css';

export default function App() {

    const HeaderWithRoute = withRouter(Header);

    return (

      <BrowserRouter>

        <div>

          {
            <HeaderWithRoute />
          }

          <div className="container-fluid">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Bootstrap" component={Bootstrap} />
              <Route path="/Forms" component={Forms} />
              <Route path="/Temp" component={Temp} />
              <Route path="/Contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>

        </div>

      </BrowserRouter>

    );
  }
