import React, { Component } from 'react';

const Menu = function (props) {

        if (!props.departments) return <p>Cargando...</p>;

        return <div className="menu">
            <div className="options">
                {props.departments.map((dep) => {
                    return <a key={dep.department_id}
                        href={`/department/${dep.name}`}>
                        {dep.name}
                    </a>;
                })}
            </div>
        </div>;
}

export default Menu;