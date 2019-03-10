import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import HambMenu from './HambMenu';
import SearchBox from './SearchBox';


const NavBar = function (props) {
    return <div className="nav-bar">
        <Logo />
        <Menu />
        <div className="nav-btns">
            <SearchBox />
            <button id="bag-btn">
                <img src="./assets/bag.svg" alt=""></img>
            </ button>
            <HambMenu />
        </div>

    </div>;
}

export default NavBar;