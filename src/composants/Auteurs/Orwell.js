import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Orwell = () => {
    return (
        <div>
            <Nav />
            <h1>Nom : Orwell </h1>
            <ul>Livres
                <li><NavLink exact to="/LFA" activeClassName="nav-active">La Ferme des Animaux</NavLink></li>


            </ul>
        </div>
    );
};

export default Orwell;