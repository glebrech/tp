import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div class='navigation'>
            <button> <NavLink exact to="/" activeClassName="nav-active" >
                Accueil
            </NavLink></button>
            <button><NavLink exact to="/Auteurs" activeClassName="nav-active">
                Auteurs
            </NavLink></button>

            <button><NavLink exact to="/Genres" activeClassName="nav-active">
                Genres
            </NavLink></button>

            <button><NavLink exact to="/Utilisateurs" activeClassName="nav-active">
                Utilisateurs
            </NavLink></button>
            <button> <NavLink exact to="/Utilisateurs" activeClassName="nav-active">
                Utilisateurs
            </NavLink></button>

        </div>
    );
};

export default Nav;