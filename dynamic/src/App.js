import React, { Component } from 'react';

import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Home     from './Home';
import Start   from './components/Start';
import Forms    from './components/Forms';
import Contact  from './components/Contact';
import Temp     from './components/Temp';
import SideBar  from './components/SideBar';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    marginLeft: 200,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar
}));

export default function App() {

    const classes = useStyles();
    const theme = useTheme();

    return (

      <BrowserRouter>
        <div className={classes.root}>
          <div>
            {
              //<Header />
            }
            {
              <SideBar />
            }
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/Start" component={Start} />
                  <Route path="/Forms" component={Forms} />
                  <Route path="/Temp" component={Temp} />
                  <Route path="/Contact" component={Contact} />
                  <Route component={Error} />
                </Switch>
              </main>
          </div>
        </div>
      </BrowserRouter>

    );
  }

//export default App;
