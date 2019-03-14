import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
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

            <div className="hamb-menu-btns">
                {(props.showHambMenu)
                    ? <button onClick={props.onClick} id="x-close-btn">
                        <img src="./assets/X-close.svg" alt=""></img>
                    </ button>
                    : <button onClick={props.onClick} id="hamb-btn">
                        <img src="./assets/hamburger-menu.svg" alt=""></img>
                    </ button>}
            </div>

        </div>

    </div>;
}

export default NavBar;