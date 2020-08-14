import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import { Toolbar, Typography, AppBar, Tabs, Tab } from "@material-ui/core";

class Header extends Component {

    render () {

        return (
            <div>

                <div>
                <AppBar position="fixed">

                    <Toolbar>
                        <Typography color="inherit">
                            Material UI
                        </Typography>
                        <Tabs indicatorColor="primary" value={false}>
                            <Tab 
                                label="Home" 
                                component={Link} 
                                to="/" 
                                value={false}/>
                            <Tab label="Forms" component={Link} to="/Forms" value={false} />
                            <Tab label="Temp" component={Link} to="/Temp" value={false} />
                            <Tab label="Contact" component={Link} to="/Contact" value={false} />
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