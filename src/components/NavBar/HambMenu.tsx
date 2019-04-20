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
                {store.departments && store.departments.map((dep) => {
                    console.log('options hamb working');
                    return <button key={dep.department_id}
                        onClick={() => {
                            handleClick(dep.department_id);
                        }}
                        style={{
                            color: store.currentDept === dep.department_id ? '#F62F5E' : '#2E2E2E',
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