import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchBox from './SearchBox';
import HambMenu from '../NavBar/HambMenu';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { showHambMenu: false };
    }

    handleHambMenu() {
        console.log('show hamb menu');
        this.setState(prevState => {
            return {
                showHambMenu: !prevState.showHambMenu
            };
        });
    }

    render() {
        return (
            <header>
                <div className="nav-bar">
                    <Logo />
                    <Menu />

                    <div className="nav-btns">

                        <SearchBox />

                        <button id="bag-btn">
                            <img src="./assets/bag.svg" alt=""></img>
                        </ button>

                        <div className="hamb-menu-btns">
                            {(this.state.showHambMenu)
                                ? <button onClick={this.handleHambMenu.bind(this)} id="x-close-btn">
                                    <img src="./assets/X-close.svg" alt=""></img>
                                </ button>
                                : <button onClick={this.handleHambMenu.bind(this)} id="hamb-btn">
                                    <img src="./assets/hamburger-menu.svg" alt=""></img>
                                </ button>}
                        </div>

                    </div>

                </div>
                {(this.state.showHambMenu) ? <HambMenu /> : ""}
            </header>);


    }
}

export default NavBar;