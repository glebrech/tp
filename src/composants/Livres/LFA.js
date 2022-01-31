import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';

const LFA = () => {
    return (
        <div>
            <Nav />
            <h1>Titre : La Ferme des Animaux</h1>
            <ul>
                <li>Auteur : <NavLink exact to="/Auteurs/Orwell" activeClassName="nav-active" >Orwell</NavLink></li>
                <li><NavLink exact to="/Auteurs/Orwell/Bibliographie" activeClassName="nav-active" >Bibliographie :  Orwell</NavLink> </li>
                <li> <NavLink exact to="/Genres/Dystopie" activeClassName="nav-active" >Dystopie</NavLink></li>

            </ul>
        </div>
    );
};

export default LFA;