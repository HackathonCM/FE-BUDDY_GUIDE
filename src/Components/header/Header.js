import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AppBar, Badge, Button, Box, IconButton, Menu, MenuItem, Typography, Toolbar } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import Search from './components/Search/Search';
import { GlobalContext } from "../../Context/global";
import style from "./header.css"
import { useLogout } from "../../Pages/Login/helpers";
import { getStorageValue } from "../../Common/LocalStorage/helpers";
import { LocalStorageKeys } from "../../Common/LocalStorage/interface";

export default function PrimarySearchAppBar() {
    const navigate = useNavigate();
    const { globalState, setGlobalState } = useContext(GlobalContext);

    const { logout } = useLogout();

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    useEffect(() => {
        const loginStorageValue = getStorageValue(LocalStorageKeys.LOGIN);

        if (loginStorageValue) {
            setGlobalState({ user: loginStorageValue });
        }
    }, []);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            {/* <MenuItem onClick={logout}>My account</MenuItem> */}
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {globalState.user ? <>
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); logout(); navigate('/login'); }}>
                    <IconButton
                        size="large"
                        aria-label="logout of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <LogoutIcon />
                    </IconButton>
                    <p>Log out</p>
                </MenuItem>
            </> : <MenuItem onClick={() => {
                navigate('/login');
            }}>
                <p>Login</p>
            </MenuItem>}
        </Menu>
    );

    const renderIconAndTitle = () => {
        return (
            <>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Buddy Guide
                </Typography>
            </>
        )

    }

    const renderDesktopMenu = () => {
        if (!globalState.user) {
            return (<Button sx={{ display: { xs: 'none', md: 'flex' } }} variant="outlined" onClick={() => {
                navigate('/login');
            }}>Login</Button >)
        } else
            return (
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        onClick={() => { logout(); navigate('/login'); }}
                        size="large"
                        aria-label="logout"
                        color="inherit"
                    >
                        <LogoutIcon />
                    </IconButton>
                </Box>
            )
    }

    const renderMoreButton = () => {
        return (
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Box>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" classes={{ root: { backgroundColor: "red" } }}>
                <Toolbar>
                    {renderIconAndTitle()}
                    <Search />

                    <Box sx={{ flexGrow: 1 }} />

                    {renderDesktopMenu()}
                    {renderMoreButton()}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
