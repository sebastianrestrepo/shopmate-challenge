import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

const Menu = () => {
    if(!store.departments) return <p style={{color:'white'}}>Cargando...</p>;
    console.log('stooore', store.departments)
    var handleClick = (id: number) => {
        store.setDepartment(id);
    }

    return <div className="menu">
            {console.log('menu working', store.departments)}
        <div className="options">
        
            {store.departments && store.departments.map((dep) => {
                            console.log('options working');
                return <button key={dep.department_id}
                    onClick={() => {
                        handleClick(dep.department_id);
                    }}
                    style={{
                        color: store.currentDept === dep.department_id ? '#F62F5E' : 'white',
                    }}
                    className={store.currentDept === dep.department_id ? 'active' : ''}>
                    {dep.name}
                </button>;
            })}
        </div>
            </div>;
}

export default observer(Menu);