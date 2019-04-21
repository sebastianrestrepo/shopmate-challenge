import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchBox from './SearchBox';
import HambMenu from './HambMenu';

import api from '../../utils/api';
import store from '../../stores/stores';
import { observer } from 'mobx-react';

class NavBar extends Component {
    constructor(props: {}) {
        super(props);

    }

    handleHambMenu(show: boolean) {
        console.log('show hamb menu');
        console.log(store.getShowHambMenu());
        store.setShowHambMenu(show);
    }

    render() {
        return (
            <header>
                <div className="nav-bar">
                    <Logo />
                   {console.log('lamaaaooo')}

                    <Menu />

                    <div className="nav-btns">

                        <SearchBox />

                        <button id="bag-btn">
                            <img src="./assets/bag.svg" alt=""></img>
                        </ button>

                        <div className="hamb-menu-btns">
                        {/*store.setShowHambMenu()*/}
                            {(store.getShowHambMenu())
                                ?
                                <button onClick={() => {this.handleHambMenu(false); console.log('lmao true');} } id="x-close-btn">
                                    <img src="./assets/X-close.svg" alt=""></img>
                                </ button> 
                                :
                                <button onClick={() => {this.handleHambMenu(true); console.log('lmao false');} } id="hamb-btn">
                                    <img src="./assets/hamburger-menu.svg" alt=""></img>
                                </ button>}
                        </div>

                    </div>

                </div>
                {(store.getShowHambMenu())
                    ? <HambMenu /> 
                    : ""}
            </header>);


    }
}

export default observer(NavBar);