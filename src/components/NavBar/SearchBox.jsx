import React, { Component } from 'react';

const SearchBox = function (props) {
    return <div className="search-box">
        <button id="search-btn">
            <img src="./assets/search.svg" alt=""></img>
        </ button>

        <input className="search-txt" name="" placeholder="search anything" />
    </div>;
}

export default SearchBox;