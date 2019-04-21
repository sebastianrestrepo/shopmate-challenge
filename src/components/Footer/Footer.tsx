import React, { Component } from 'react';

import api from '../../utils/api';
import store from '../../stores/stores';
import { observer } from 'mobx-react';
import Menu from '../NavBar/Menu';

class Footer extends Component {
    constructor(props: {}) {
        super(props);
    }


    render() {
        return (<footer>
            <Menu/>
            <h4>© 2016 Shopmate Ltda. • Contact • Private Policy</h4>
        </footer>);


    }
}

export default observer(Footer);