import React, { Component } from 'react';

const HambMenu = function (props) {
    if (!props.departments) return <p>Cargando...</p>;

    return <div className="hamb-menu-cont">
        <div className="hamb-menu">
            <div className="hamb-options">
                {props.departments.map((dep) => {
                    return <a key={dep.department_id}
                        href={`/department/${dep.name}`}>
                        {dep.name}
                    </a>;
                })}
            </div>
        </div>
    </div>;
}

export default HambMenu;