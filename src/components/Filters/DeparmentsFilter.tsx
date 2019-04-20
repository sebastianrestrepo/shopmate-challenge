import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

const DepartmentsFilter = () => {
    
    if (!store.departments) return <p style={{ color: 'white' }}>Cargando...</p>;
    console.log('stooore', store.departments)
    var handleClick = (id: number) => {
        store.setDepartment(id);
    }

    return  <div className="box-btns">
                {store.departments && store.departments.map((dep) => {
                    return <button key={dep.department_id}
                        onClick={() => {
                            handleClick(dep.department_id);
                        }}
                        style={{
                            color: store.currentDept === dep.department_id ? 'white' : '#2E2E2E',
                            backgroundColor: store.currentDept === dep.department_id ? '#F62F5E' : 'rgb(226, 226, 226)',
                        }}
                        className={store.currentDept === dep.department_id ? 'active' : ''}>
                        {dep.name}
                    </button>;
                })}
            </div>;
}

export default observer(DepartmentsFilter);