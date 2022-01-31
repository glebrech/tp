import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Dupont = () => {
    return (
        <div>
            <Nav />
            <h1>Nom Prénom : Dupont Dylan </h1>
            <ul>Bibliothèque Utilisateur :
                <li><NavLink exact to="/LFA" activeClassName="nav-active">La Ferme des Animaux</NavLink></li>
                <li><NavLink exact to="/LSA" activeClassName="nav-active">Le Seigneur des Anneaux</NavLink></li>


            </ul>
        </div>
    );
};

export default Dupont;