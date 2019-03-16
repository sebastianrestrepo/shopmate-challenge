import React, { Component } from 'react';

class Menu extends Component{

    render(){
        if(!this.props.departments) return <p>Cargando...</p>;

        return <nav>
            <h1>{this.props.departments.length}</h1>
            {this.props.departments.map(( dep ) => {
                return <a key={dep.department_id} 
                    href={`/department/${dep.name}`}>
                    {dep.name}
                </a>;
            })}
        </nav>;
    }
}

export default Menu;