import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import { Toolbar, Typography, AppBar, Tabs, Tab } from "@material-ui/core";

class Header extends Component {

    render () {

        return (
            <div>

                <div>
                <AppBar position="static">

                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Material UI
                        </Typography>
                        <Tabs indicatorColor="primary">
                            <Tab 
                                label="Home" 
                                component={Link} 
                                to="/" />
                            <Tab label="Forms" component={Link} to="/Forms" />
                            <Tab label="Temp" component={Link} to="/Temp" />
                            <Tab label="Contact" component={Link} to="/Contact" />
                        </Tabs> 
                    </Toolbar>

                </AppBar>
                </div>

                {/*
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Forms">Forms</NavLink>
                <NavLink to="/Temp">Temp</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                */}
            </div>
        );
    }
}

export default Header