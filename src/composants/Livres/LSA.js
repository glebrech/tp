import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';

const LSA = () => {
    return (
        <div>
            <Nav />
            <h1>Titre : Le Seigneur des Anneaux</h1>
            <ul>
                <li>Auteur : <NavLink exact to="/Auteurs/Tolkien" activeClassName="nav-active" >Tolkien</NavLink></li>
                <li><NavLink exact to="/Auteurs/Tolkien/Bibliographie" activeClassName="nav-active" >Bibliographie :  Tolkien</NavLink> </li>
                <li> <NavLink exact to="/Genres/Fantastique" activeClassName="nav-active" >Fantastique</NavLink></li>

            </ul>
        </div>
    );
};

export default LSA;