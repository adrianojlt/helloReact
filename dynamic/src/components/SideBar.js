import React from 'react';
import { Drawer, Toolbar } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}));

function SideBar() {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <CssBaseline />

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" noWrap>
                    Hello React
                </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" > 
                <Toolbar />
                <List>
                    <ListItem key="Home" component={Link} to="/">
                        <ListItemIcon> <InboxIcon /> </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem key="Start" component={Link} to="/start">
                        <ListItemIcon> <InboxIcon /> </ListItemIcon>
                        <ListItemText primary="Start" />
                    </ListItem>
                    <ListItem key="Forms" component={Link} to="/Forms">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Start" />
                    </ListItem>
                    <ListItem key="Forms" component={Link} to="/Forms">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Forms" />
                    </ListItem>
                    {/*['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))*/}

                </List>
            </ Drawer> 

        </div>
    );
}

export default SideBar;