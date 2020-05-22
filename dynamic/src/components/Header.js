import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, AppBar } from "@material-ui/core";

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
                    </Toolbar>

                </AppBar>
                </div>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/Forms">Forms</NavLink>
                <NavLink to="/Temp">Temp</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </div>
        );
    }
}

export default Header