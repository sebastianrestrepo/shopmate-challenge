import React, { Component } from 'react';
import SearchBox from './SearchBox';

const Menu = function (props) {
    return <div className="menu">
        <div className="options">
            <a href="">Women</a>
            <a href="">Men</a>
            <a href="">Kids</a>
            <a href="">Shoes</a>
            <a href="">Brands</a>
        </div>

        <SearchBox />

        <button id="bag-btn">
            <img src="./assets/bag.svg" alt=""></img>
        </ button>

    </div>;
}

export default Menu;