import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';


const Tolkien = () => {
    return (
        <div>
            <Nav />
            <h1>Nom : Tolkien </h1>
            <ul>Livres
                <li><NavLink exact to="/Hobbit" activeClassName="nav-active">Hobbit</NavLink></li>
                <li><NavLink exact to="/LSA" activeClassName="nav-active">Le Seigneur des Anneaux</NavLink></li>


            </ul>
        </div>
    );
};

export default Tolkien;