import React, { Component } from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Header   from './components/Header';
import Forms    from './components/Forms';
import Contact  from './components/Contact';
import './App.css';

class App extends Component {

  render() {

    return (

      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Forms" component={Forms} />
            <Route path="/Contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
