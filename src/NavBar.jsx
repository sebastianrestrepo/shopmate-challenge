import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';

const NavBar = function (props) {
    return <div className="nav-bar container-fluid">
        <Logo />
        <Menu />
    </div>;
}

export default NavBar;