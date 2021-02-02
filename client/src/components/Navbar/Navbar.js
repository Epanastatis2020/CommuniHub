import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../../store';
import { useLoginCheck, logout } from '../../utils/setAuthToken';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
    const history = useHistory();
    const [state, dispatch] = useAppContext();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [drawerOpen, setOpen] = React.useState(false);

    useLoginCheck(dispatch);

    const handleLogOut = (e) => {
        e.preventDefault();
        logout(dispatch);
        history.push('/');
    };

    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const loginRegLink = (
            <Toolbar>
                <Link to="/login">
                    <Button variant="contained" color="primary">Login</Button>
                </Link>
                <Link to="/register">
                    <Button variant="contained" color="secondary">Register</Button>
                </Link>
            </Toolbar>
    );
    const userLink = (
            <Toolbar>
                <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={() => (setOpen(true))}
                        >
                    <MenuIcon />
                </IconButton>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                    </Menu>
                </div>
                <Button color="inherit" onClick={handleLogOut} data-toggle="modal" data-target="#logoutModal" id="logoutBtn">Logout</Button>
            </Toolbar>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">
                {state.isAuthenticated ? userLink : loginRegLink}
            </AppBar>
            <Sidebar 
                open={drawerOpen}
                toggleClose={() => (setOpen(false))}/>
        </div>
    );
}