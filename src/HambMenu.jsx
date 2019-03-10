import React, { Component } from 'react';

const HambMenu = function (props) {
    return <div className="hamb-menu">
        <button id="hamb-btn">
            <img src="./assets/hamburger-menu.svg" alt=""></img>
        </ button>
        {/*<div className="hamb-options">
            <a href="">Women</a>
            <a href="">Men</a>
            <a href="">Kids</a>
            <a href="">Shoes</a>
            <a href="">Brands</a>
</div>*/}
    </div>;
}

export default HambMenu;