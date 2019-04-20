import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

const HambMenu = () => {
    var handleClick = (id: number) => {
        store.setDepartment(id);
}

    return <div className="hamb-menu-cont">
        <div className="hamb-menu">
            <div className="hamb-options">
            {store.departments && store.departments.map(( dep ) => {
            return <button key={dep.department_id} 
                onClick={() => {
                    handleClick(dep.department_id);
                }}
                style={{
                    backgroundColor: store.currentDept === dep.department_id ? '#E0E0E0' : 'white',
                }}
                className={store.currentDept === dep.department_id ? 'active' : ''}>
                {dep.name}
            </button>;
        })}
            </div>
        </div>
    </div>;
}

export default observer(HambMenu);