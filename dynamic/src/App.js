import React from 'react';

import { withRouter } from 'react-router';

import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import Container  from 'react-bootstrap';

import Home         from './Home';
import Apps         from './Apps/Apps';
import Stars        from './Apps/Stars/Stars';
import Header       from './components/Header';
import Bootstrap    from './components/Bootstrap';
import Forms        from './components/Forms/Forms';
import Contact      from './components/Contact';

import Temp         from './components/Temp';

import Jsx         from './components/React/Jsx';
import Props       from './components/React/Props';
import State       from './components/React/State';

import AnimalCard   from './components/React/AnimalCard/AnimalCard';

import Lynx         from './Apps/Lynx';
import Salary       from './Apps/Salary';

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

              <Route path="/react/jsx" component={Jsx} exact />
              <Route path="/react/props" component={Props} exact />
              <Route path="/react/props/animal" component={AnimalCard} exact />
              <Route path="/react/state" component={State} exact />

              <Route path="/apps" exact component={Apps} />
              <Route path="/apps/stars" component={Stars} />
              <Route path="/apps/lynx" component={Lynx} />
              <Route path="/apps/salary" component={Salary} />

              <Route path="/bootstrap" component={Bootstrap} />
              <Route path="/forms" component={Forms} />
              <Route path="/temp" component={Temp} />
              <Route path="/contact" component={Contact} />

              <Route component={Error} />

            </Switch>
            
          </div>

        </div>

      </BrowserRouter>

    );
  }
