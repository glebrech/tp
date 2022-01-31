import React from 'react';
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';


function Utilisateurs() {

    return (

        <div>
            <Nav />
            <h1>Utilisateurs</h1>
            <ul>
                <li> <NavLink exact to="/Utilisateurs/Dupont" activeClassName="nav-active" >Dupont</NavLink></li>
            </ul>

        </div>

    );
}



export default Utilisateurs;
